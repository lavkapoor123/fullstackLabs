import { Product } from "../product";
export type CartItem = {
    product: Product;
    quantity: number;
};
export enum CartStatus {
    Active,
    Checkout,
    Paid
}