// Product data
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
const amountPaidInput = document.querySelector("#amountPaid");
const paymentMessage = document.querySelector("#paymentMessage");
const confirmPaymentButton = document.querySelector("#confirmPaymentButton");
const receiptModal = document.querySelector("#receiptModal");
const receiptContent = document.querySelector("#receiptContent");
const closeReceiptButton = document.querySelector("#closeReceiptButton");
const viewReceiptButton = document.querySelector("#viewReceiptButton");
const newTransactionButton = document.querySelector("#newTransactionButton");

let cart = [];
let completedTransaction = null;

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

// Product rendering
function renderProducts() {
  productGrid.innerHTML = products.map(renderProductCard).join("");
}

function renderProductCard(product) {
  return `
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
          step="1"
          value="1"
          aria-label="Quantity for ${product.name}"
          data-quantity-for="${product.id}"
        />
        <button class="primary-button" type="button" data-add-product="${product.id}">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

// Product and cart helpers
function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function getRequestedQuantity(productId) {
  const input = document.querySelector(`[data-quantity-for="${productId}"]`);
  const quantity = Number(input.value);

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

  clearCompletedTransaction();
  renderCart();
}

function updateCartQuantity(productId, change) {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (!item) return;

  const nextQuantity = item.quantity + change;
  if (nextQuantity < 1) return;

  item.quantity = nextQuantity;
  clearCompletedTransaction();
  renderCart();
}

function removeItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  clearCompletedTransaction();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Cart rendering
function renderCart() {
  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  cartItemCount.textContent = `${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`;
  emptyCartMessage.classList.toggle("hidden", cart.length > 0);
  cartTotal.textContent = peso.format(getCartTotal());

  cartList.innerHTML = cart.map(renderCartItem).join("");
}

function renderCartItem(item) {
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
}

// Payment and receipt state
function setPaymentMessage(message, type = "") {
  paymentMessage.textContent = message;
  paymentMessage.className = `payment-message ${type}`.trim();
}

function clearCompletedTransaction() {
  completedTransaction = null;
  viewReceiptButton.disabled = true;
  newTransactionButton.disabled = true;
  receiptContent.innerHTML = "Transaction receipt will appear here after payment is confirmed.";
  closeReceiptModal();
  setPaymentMessage("");
}

function validatePayment(amountText) {
  const total = getCartTotal();
  const trimmedAmount = amountText.trim();
  const decimalCashPattern = /^\d+(\.\d{1,2})?$/;
  const amountPaid = Number(trimmedAmount);

  if (cart.length === 0) {
    return { isValid: false, message: "Add at least one item before payment." };
  }

  if (!decimalCashPattern.test(trimmedAmount) || !Number.isFinite(amountPaid)) {
    return { isValid: false, message: "Please enter a valid payment amount." };
  }

  if (amountPaid < total) {
    return {
      isValid: false,
      message: `Insufficient payment. Please enter at least ${peso.format(total)}.`,
    };
  }

  return { isValid: true, amountPaid, change: amountPaid - total };
}

// Transaction helpers
function createTransactionReference() {
  const now = new Date();
  const datePart = String(now.getFullYear()) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");
  const timePart = String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0") +
    String(now.getMilliseconds()).padStart(3, "0");

  return `CC-${datePart}-${timePart}`;
}

function confirmPayment() {
  const result = validatePayment(amountPaidInput.value);

  if (!result.isValid) {
    setPaymentMessage(result.message, "error");
    return;
  }

  completedTransaction = {
    reference: createTransactionReference(),
    items: cart.map((item) => ({ ...item })),
    total: getCartTotal(),
    amountPaid: result.amountPaid,
    change: result.change,
  };

  setPaymentMessage(
    `Payment successful. Change: ${peso.format(completedTransaction.change)}.`,
    "success"
  );
  renderReceipt();
  viewReceiptButton.disabled = false;
  newTransactionButton.disabled = false;
  openReceiptModal();
}

// Receipt modal
function openReceiptModal() {
  if (!completedTransaction) return;

  receiptModal.classList.remove("hidden");
  closeReceiptButton.focus();
}

function closeReceiptModal() {
  receiptModal.classList.add("hidden");
}

function renderReceipt() {
  if (!completedTransaction) return;

  const itemRows = completedTransaction.items.map(renderReceiptItem).join("");

  receiptContent.innerHTML = `
    <div class="receipt-slip">
      <div class="receipt-header-block">
        <h3 class="receipt-brand-title">Campus Cafeteria</h3>
        <p class="receipt-brand-subtitle">Official Transaction Receipt</p>
      </div>
      <hr class="receipt-divider" />
      <div class="receipt-meta-row">
        <span>Reference:</span>
        <strong class="receipt-reference">${completedTransaction.reference}</strong>
      </div>
      <hr class="receipt-divider" />
      <div class="receipt-items-list">
        ${itemRows}
      </div>
      <div class="receipt-total-line">
        <span>Total</span>
        <span>${peso.format(completedTransaction.total)}</span>
      </div>
      <div class="receipt-summary-group">
        <div class="receipt-line">
          <span>Amount Paid</span>
          <strong>${peso.format(completedTransaction.amountPaid)}</strong>
        </div>
        <div class="receipt-highlight-line">
          <span>Change</span>
          <span>${peso.format(completedTransaction.change)}</span>
        </div>
      </div>
      <p class="receipt-footer-msg">Thank you for dining at Campus Cafeteria!</p>
    </div>
  `;
}

function renderReceiptItem(item) {
  return `
    <div class="receipt-line">
      <span>${item.quantity} &times; ${item.name}</span>
      <strong>${peso.format(item.price * item.quantity)}</strong>
    </div>
  `;
}

// Reset
function startNewTransaction() {
  cart = [];
  amountPaidInput.value = "";
  setPaymentMessage("");
  clearCompletedTransaction();
  renderCart();
}

// Event handlers
productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-product]");

  if (!addButton) return;

  addToCart(addButton.dataset.addProduct);
});

productGrid.addEventListener("input", (event) => {
  if (!event.target.matches("[data-quantity-for]")) return;

  const quantity = Number(event.target.value);

  if (!Number.isInteger(quantity) || quantity < 1) {
    event.target.value = "1";
  }
});

cartList.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");

  if (increaseButton) {
    updateCartQuantity(increaseButton.dataset.increase, 1);
  }

  if (decreaseButton) {
    updateCartQuantity(decreaseButton.dataset.decrease, -1);
  }

  if (removeButton) {
    removeItem(removeButton.dataset.remove);
  }
});

confirmPaymentButton.addEventListener("click", confirmPayment);
viewReceiptButton.addEventListener("click", openReceiptModal);
closeReceiptButton.addEventListener("click", closeReceiptModal);
newTransactionButton.addEventListener("click", startNewTransaction);

receiptModal.addEventListener("click", (event) => {
  if (event.target === receiptModal) {
    closeReceiptModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !receiptModal.classList.contains("hidden")) {
    closeReceiptModal();
  }
});

// App startup
renderProducts();
renderCart();
