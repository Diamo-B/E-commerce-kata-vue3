import { Ref } from "vue";
import { Product } from "./Product";
import { ICartItem } from "./cart";

export type categoryContext =  Ref <{
  categories: string[],
  selected: string|null  
}>

export type productContext = Ref<{
    products: Product[];
}>

export type cartContext = Ref<{
    items: ICartItem[];
    addCartItem: (product: Product) => void;
    removeCartItem: (id: number) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
}>