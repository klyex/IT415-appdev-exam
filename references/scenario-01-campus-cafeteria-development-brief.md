# Scenario 01 Campus Cafeteria Development Brief

Use this brief when the user confirms Scenario 1 as the assigned scenario.

## Assigned Scenario

Scenario 1 - Campus Cafeteria POS.

## Required Products

| Product | Price |
| --- | ---: |
| Rice (Plain) | ₱15.00 |
| Fried Chicken (1 pc) | ₱65.00 |
| Pork Adobo | ₱60.00 |
| Vegetable Side Dish | ₱35.00 |
| Iced Tea (cup) | ₱20.00 |
| Bottled Water | ₱20.00 |

## User-Provided Development Prompt Summary

The user wants a desktop or laptop Campus Cafeteria POS application for the IT415 practical examination. The application must support browsing products, adding items to a cart, reviewing an order, entering cash payment, validating payment, computing change, displaying confirmation, generating a digital receipt, and starting a new transaction.

Required behavior:

- Add products through on-screen buttons.
- Increase or decrease quantities.
- Remove items.
- Automatically update item subtotals and overall total when the cart changes.
- Show an order summary with items, quantities, subtotals, and total.
- Accept cash through a numeric input field.
- Reject blank, non-numeric, negative, and insufficient payments with clear on-screen messages.
- Calculate change as amount paid minus total for valid payment.
- Show payment confirmation.
- Generate a receipt with items, quantities, subtotals, total, amount paid, change, and transaction reference.
- Provide a New Transaction button that clears the cart, payment amount, and receipt.

Constraints:

- Use tools covered in class; if unspecified, prefer simple plain HTML, CSS, and JavaScript.
- Hard-code products and prices.
- Keep transaction data in memory or simple local structures.
- Do not add a database, login, inventory management, payment gateway, QR payment, card payment, or deployment.
- Keep the interface simple, readable, and desktop-friendly.
- Preserve working code during later changes.

Development stages:

1. Setup and interface.
2. Ordering and calculations.
3. Validation and final improvements.

Calculation test:

Two Fried Chicken, one Rice (Plain), and one Iced Tea should total ₱165.00. A ₱200.00 payment should produce ₱35.00 change. This is an expected result for verification, not evidence that the app has already passed.
