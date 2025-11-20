function addToCart() {
  const product = {
    name: "Smartphone XYZ",
    price: 15999
  };
  localStorage.setItem("cart", JSON.stringify([product]));
  alert("Item added to cart!");
}

function goToCart() {
  window.location.href = "cart.html";
}

function placeOrder() {
  window.location.href = "place-order.html";
}

// Display items in cart.html
if (location.pathname.includes("cart.html")) {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  if (cartData.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
  } else {
    cartData.forEach(item => {
      container.innerHTML += `
        <div class="product">
          <h2>${item.name}</h2>
          <p>Price: ₹${item.price}</p>
        </div>
      `;
    });
  }
}
function submitOrder(event) {
  event.preventDefault();
  alert("Order placed successfully!");
  localStorage.clear();
  window.location.href = 'index.html';
}