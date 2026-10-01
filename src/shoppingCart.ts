import type { Product } from "./product.js";
import { CartItem, CartStatus } from "./types/index.js";

export class ShoppingCart {
    private _items: CartItem[] = [];
    private _status: CartStatus = CartStatus.Active;

    get items(): CartItem[] {
        return this._items;
    }

    addProduct(product: Product): void {
        const item = this._items.find(
            item => item.product.id === product.id
        );

        if (item) {
            item.quantity++;
        } else {
            this._items.push({
                product: product,
                quantity: 1
            });
        }
    }

    removeProduct(productId: number): Product | null {
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].product.id === productId) {
                return this._items.splice(i, 1)[0].product;
            }
        }

        return null;
    }

    getTotalPrice(): number {
        let total = 0;

        for (let item of this._items) {
            total += item.product.price * item.quantity;
        }

        return total;
    }

    findCartItem(
        predicate: (item: CartItem) => boolean
    ): CartItem | null {
        return this._items.find(predicate) ?? null;
    }
}