import { Ref,  ref } from "vue";
import { Product } from "../types/Product";
import { ICartItem } from "../types/cart";
import { cartContext, categoryContext, productContext } from "../types/contextTypes";

export default function useStoreInit() {
  const categories: Ref<string[]> = ref([]);
  const products: Ref<Product[]> = ref([]);
  const cartItems: Ref<ICartItem[]> = ref([]);

  const fetchData = async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => (categories.value = json))
      .catch((err) => console.error(err));

    //? Fetching products data
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json: Product[]) =>
        setTimeout(() => {
          products.value = json;
        }, 2000)
      )
      .catch((err) => console.error(err));
  };

  const initializeValues = () => {
    const selected: Ref<string | null> = ref(null);

    const categoryValue: categoryContext = ref({
      categories: categories,
      selected,
    });

    const productsValue: productContext = ref({
      products: products,
    });

    const cartValues:cartContext = ref({
      items: cartItems.value,
      addCartItem(product: Product) {
        const prev = cartItems.value;
        if (!prev.some((item) => item.product.id === product.id))
          cartItems.value = [...prev, { product: product, quantity: 1 }];
        else cartItems.value = prev;
      },
      removeCartItem(id: number) {
        const prev = cartItems.value;
        cartItems.value = prev.filter((item) => item.product.id !== id);
      },
      incrementQuantity(id: number) {
        cartItems.value = cartItems.value.map((item) => {
          if (item.product.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      },
      decrementQuantity(id: number) {
        cartItems.value = cartItems.value.map((item) => {
          if (item.product.id === id && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      },
    });
    return {cartValues, productsValue, categoryValue}
  }

  return {fetchData, initializeValues}
}
