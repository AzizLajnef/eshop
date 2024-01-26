function performLogin() {
    // You may want to include actual login logic here

    // For demonstration purposes, let's assume the login is successful
    // and redirect to the dashboard page
    window.location.href = "clothing2.html";
}

function like(productId) {
    // Get the product container
    var likeImage = $('#' + productId + ' .like-image');

    // Toggle the visibility of the like image
    likeImage.toggle();
}
var cart = []


function addToCart(name,price) {
    var product = {
        name: name,
        price: price
    }
    cart.push(product)
    updateCartDisplay()
}
function removeFromCart(index) {
  cart.splice(index, 1)// Remove item from the cart array at the specified index
  updateCartDisplay()
}


function updateCartDisplay(){
  var cartItemsElement = $('#cart-items')
  var cartTotalElement = $('#cart-total')

  cartItemsElement.empty()


  for (var index = 0; index < cart.length; index++) {
    var product = cart[index]
    var listItem = $('<li>').text(product.name + ' - $' + product.price.toFixed(2))
    var removeButton = $('<button id="buttonremove" onclick="removeFromCart('+index+')">').text('Remove')
    $('#cart-items').append(listItem)
    $('#cart-items').append(removeButton)
  }

  var total = 0
  for (var index = 0; index < cart.length; index++) {
    var product = cart[index]
    total += product.price
  }
  cartTotalElement.text(total.toFixed(2))
}