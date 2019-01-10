// add item to cart button
var addButton = document.getElementById("add-button");
addButton.addEventListener( "click", addItemToCart);

// clear cart button
var btn = document.getElementById("clear-cart");
btn.addEventListener( "click", clearCart);




// Shopping Cart
var cart = [];

// item to select
function Item(name, price, qty) {
    this.name = name
    this.price = price
    this.qty = qty
};

// Add item to cart
function addItemToCart(name, price, qty) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].qty += qty;
            return;
        }
    }
    var item = new Item(name, price, qty);
    cart.push(item);
}

    addItemToCart("Snickers", 1.25, 1);
    addItemToCart("Kisses", 1.00, 1);
    addItemToCart("Payday", 1.15, 1);

// Delete item from cart
function deleteItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
}

//console.log(cart);

// clear all items from Cart
function clearCart() {
    cart = [];
}

// cart qty and price total
function qtyCart() {
    var totalQty = 0;
    for (var i in cart) {
        totalQty += cart[i].qty;
    }
    return totalQty;
}

//console.log( qtyCart() );

function totalCart() {
    var totalPrice = 0;
    for (var i in cart) {
        totalPrice += cart[i].price;
    }
    return totalPrice;
}

//console.log( totalCart() );

// Display Cart
function listCart() { // array of Items
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

var array = listCart();

//console.log( array );