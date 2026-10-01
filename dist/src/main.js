import { Product } from "../../dist-test/product.js";
import { ShoppingCart } from "../../dist-test/shoppingCart.js";
var displayCart = function (cart) {
    console.log("--- Shopping Cart Status ---");
    cart.items.forEach(function (item) {
        console.log("- ".concat(item.product.name, " (").concat(item.quantity, "): ").concat(item.product.price));
    });
    console.log("Total Price:", cart.getTotalPrice());
    console.log("--------------------------");
};
// Create a new shopping cart
var cart = new ShoppingCart();
// Create some products
var laptop = new Product({
    id: 1,
    name: "Laptop",
    price: 999
});
var mouse = new Product({
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
