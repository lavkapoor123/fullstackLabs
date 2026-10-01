import { CartStatus } from "./types/index.js";
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this._items = [];
        this._status = CartStatus.Active;
    }
    Object.defineProperty(ShoppingCart.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCart.prototype.addProduct = function (product) {
        var item = this._items.find(function (item) { return item.product.id === product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            this._items.push({
                product: product,
                quantity: 1
            });
        }
    };
    ShoppingCart.prototype.removeProduct = function (productId) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].product.id === productId) {
                return this._items.splice(i, 1)[0].product;
            }
        }
        return null;
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        var total = 0;
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.product.price * item.quantity;
        }
        return total;
    };
    ShoppingCart.prototype.findCartItem = function (predicate) {
        var _a;
        return (_a = this._items.find(predicate)) !== null && _a !== void 0 ? _a : null;
    };
    return ShoppingCart;
}());
export { ShoppingCart };
