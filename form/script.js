let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
}

function updateCart() {
  document.getElementById('cart').innerHTML = `Cart (${cart.length})`;
}

function openModal() {
  let modal = document.getElementById('modal');
  modal.style.display = 'block';
  updateCartItems();
}

function closeModal() {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function updateCartItems() {
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

function checkout() {
  alert('Checkout completed!');
  cart = [];
  updateCart();
  closeModal();
}
