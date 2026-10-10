// Hard-coded Scenario 1 products from the IT415 activity PDF.
const products = [
  { id: "rice-plain", name: "Rice (Plain)", price: 15 },
  { id: "fried-chicken", name: "Fried Chicken (1 pc)", price: 65 },
  { id: "pork-adobo", name: "Pork Adobo", price: 60 },
  { id: "vegetable-side-dish", name: "Vegetable Side Dish", price: 35 },
  { id: "iced-tea", name: "Iced Tea (cup)", price: 20 },
  { id: "bottled-water", name: "Bottled Water", price: 20 },
];

const productGrid = document.querySelector("#productGrid");
const cartList = document.querySelector("#cartList");
const cartTotal = document.querySelector("#cartTotal");
const emptyCartMessage = document.querySelector("#emptyCartMessage");
const cartItemCount = document.querySelector("#cartItemCount");

let cart = [];

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div>
            <h3>${product.name}</h3>
            <div class="price">${peso.format(product.price)}</div>
          </div>
          <div class="product-actions">
            <input
              class="quantity-input"
              type="number"
              min="1"
              value="1"
              aria-label="Quantity for ${product.name}"
              data-quantity-for="${product.id}"
            />
            <button class="primary-button" type="button" data-add-product="${product.id}">
              Add to Cart
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function getRequestedQuantity(productId) {
  const input = document.querySelector(`[data-quantity-for="${productId}"]`);
  const quantity = Number.parseInt(input.value, 10);

  if (!Number.isInteger(quantity) || quantity < 1) {
    input.value = "1";
    return 1;
  }

  return quantity;
}

function addToCart(productId) {
  const product = getProduct(productId);
  const requestedQuantity = getRequestedQuantity(productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += requestedQuantity;
  } else {
    cart.push({ ...product, quantity: requestedQuantity });
  }

  renderCart();
}

function increaseQuantity(productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (!item) return;

  item.quantity += 1;
  renderCart();
}

function decreaseQuantity(productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (!item || item.quantity <= 1) return;

  item.quantity -= 1;
  renderCart();
}

function removeItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart() {
  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  cartItemCount.textContent = `${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`;
  emptyCartMessage.classList.toggle("hidden", cart.length > 0);
  cartTotal.textContent = peso.format(getCartTotal());

  cartList.innerHTML = cart
    .map((item) => {
      const subtotal = item.price * item.quantity;

      return `
        <article class="cart-item">
          <div class="cart-item-main">
            <div>
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-meta">${peso.format(item.price)} each</div>
            </div>
            <div class="cart-item-subtotal">${peso.format(subtotal)}</div>
          </div>
          <div class="cart-controls" aria-label="Controls for ${item.name}">
            <button class="icon-button" type="button" data-decrease="${item.id}" ${item.quantity === 1 ? "disabled" : ""}>-</button>
            <span class="cart-quantity">${item.quantity}</span>
            <button class="icon-button" type="button" data-increase="${item.id}">+</button>
            <button class="remove-button" type="button" data-remove="${item.id}">Remove</button>
          </div>
        </article>
      `;
    })
    .join("");
}

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-product]");

  if (!addButton) return;

  addToCart(addButton.dataset.addProduct);
});

productGrid.addEventListener("input", (event) => {
  if (!event.target.matches("[data-quantity-for]")) return;

  const quantity = Number.parseInt(event.target.value, 10);

  if (!Number.isInteger(quantity) || quantity < 1) {
    event.target.value = "1";
  }
});

cartList.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");

  if (increaseButton) {
    increaseQuantity(increaseButton.dataset.increase);
  }

  if (decreaseButton) {
    decreaseQuantity(decreaseButton.dataset.decrease);
  }

  if (removeButton) {
    removeItem(removeButton.dataset.remove);
  }
});

renderProducts();
renderCart();
