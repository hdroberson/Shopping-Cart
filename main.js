// create cart with array of Item (name, price, quantity)
var cart = [];

var Item = function(name, price, quantity) {
    this.name = name, 
    this.price = price, 
    this.quantity = quantity
    };

// add Item to cart (name, price, quantity)
function addItemToCart(name, price, quantity) { 
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].quantity += quantity;
            return;
        }
    }
    var item = new Item(name, price, quantity);
    cart.push(item);
};

addItemToCart('Nike', 100.99, 1);
addItemToCart('Addidas', 74.99, 1);
addItemToCart('Shoe String', 2.25, 2);
addItemToCart('Socks', 4.25, 4);

// remove one Item from cart (name)
function removeItemFromCart (name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].quantity --;
            if (cart[i].quantity === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
}

// count total quantity of Item in cart
function quantityCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].quantity;
    }
    return totalCount;
}
 console.log( quantityCart() );

 function totalCart() {
     var totalCost = 0;
     for (var i in cart) {
         totalCost += cart[i].price;
     }
     return totalCost;
 }
 console.log( totalCart() );




