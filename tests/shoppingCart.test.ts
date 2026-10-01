import { describe, test, expect } from "@jest/globals";
import { Product } from "../src/product";
import { ShoppingCart } from "../src/shoppingCart";
import { CartItem } from "../src/types/index";

describe("ShoppingCart", () => {

    test("should find an existing cart item", () => {
        const product = new Product({
            id: 1,
            name: "Laptop",
            price: 1000
        });

        const cart = new ShoppingCart();

        cart.addProduct(product);

        const result = cart.findCartItem(
            (item: CartItem) => item.product.id === 1
        );

        expect(result?.product).toBe(product);
    });

    test("should return null when item is not found", () => {
        const cart = new ShoppingCart();

        const result = cart.findCartItem(
            (item: CartItem) => item.product.id === 999
        );

        expect(result).toBeNull();
    });

    test("should increase quantity when product already exists", () => {
        const product = new Product({
            id: 1,
            name: "Laptop",
            price: 1000
        });

        const cart = new ShoppingCart();

        cart.addProduct(product);
        cart.addProduct(product);

        const result = cart.findCartItem(
            (item: CartItem) => item.product.id === 1
        );

        expect(result?.quantity).toBe(2);
    });

});