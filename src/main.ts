import { Product } from "./product.js";
import { ShoppingCart } from "./shoppingCart.js";
import type { CartItem } from "./types/index.js";

const displayCart = (cart: ShoppingCart): void => {
    console.log("--- Shopping Cart Status ---");

    cart.items.forEach((item: CartItem) => {
        console.log(
            `- ${item.product.name} (${item.quantity}): ${item.product.price}`
        );
    });

    console.log("Total Price:", cart.getTotalPrice());
    console.log("--------------------------");
};

// Create a new shopping cart
const cart = new ShoppingCart();

// Create some products
const laptop = new Product({
    id: 1,
    name: "Laptop",
    price: 999
});

const mouse = new Product({
    id: 2,
    name: "Mouse",
    price: 25
});

laptop.description = "A powerful laptop for all your needs.";

console.log("Initial state:");
displayCart(cart);

console.log("\nAdding laptop...");
cart.addProduct(laptop);
displayCart(cart);

console.log("\nAdding another laptop...");
cart.addProduct(laptop);
displayCart(cart);

console.log("\nAdding mouse...");
cart.addProduct(mouse);
displayCart(cart);

console.log("\nRemoving laptop...");
cart.removeProduct(1);
displayCart(cart);