export var CartStatus;
(function (CartStatus) {
    CartStatus[CartStatus["Active"] = 0] = "Active";
    CartStatus[CartStatus["Checkout"] = 1] = "Checkout";
    CartStatus[CartStatus["Paid"] = 2] = "Paid";
})(CartStatus || (CartStatus = {}));
