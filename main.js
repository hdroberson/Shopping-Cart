

// Shopping Cart
var cart = [];

// item to select
function Item(name, price, qty) {
    this.name = name
    this.price = price
    this.qty = qty
};

// Add item to cart
function addItemToCart(name, price, idInputQty) {
    //console.log(name,price,idInputQty);
    var qty = document.getElementById(idInputQty).value;
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].qty += qty;
            return;
        }
    }
    var item = new Item(name, price, qty);
    cart.push(item);

     //display the item in teh list (cart)
     var tr = '<tr><td>' + name + '</td><td>' + qty + '</td><td>' + price + '</td><td>' + (qty * price).toFixed(2) + '</td></tr>';
     document.getElementById("tblCart").innerHTML += tr;
      
     //update the total to pay
     total += price * qty;
 
     //display the new total
     document.getElementById('total').value = total.toFixed(2);
}


// Display Cart
var total = 0;

   
// clear all items from Cart
function clearCart() {
    document.getElementById("tblCart").innerHTML = '<thead><th>Item</th><th>Qty</th><th>Price</th></thead>';
    total = 0;
    document.getElementById('total').value = total;
    cart = [];
}