# IT415 AppDev Practical Exam

Student: Kyla Jalique  
Section: BSIT4A

This repository contains the reference skill and Markdown guides for the IT415 Midterm Practical Examination: Computer-Based Food Ordering and Point-of-Sale (POS) System.

Primary activity source: `C:\Users\Kyla\Downloads\IT415-Practical-Exam-POS-System.pdf`

The PDF requires one assigned food ordering/POS scenario, at least five priced products in Philippine pesos, cart quantity controls, item removal, automatic subtotals and totals, cash payment validation, computed change, payment confirmation, receipt generation, new-transaction reset, AI prompt documentation, screenshots, and GitHub evidence.

## Assigned Scenario

Scenario 1 - Campus Cafeteria POS

Products:

- Rice (Plain) - ₱15.00
- Fried Chicken (1 pc) - ₱65.00
- Pork Adobo - ₱60.00
- Vegetable Side Dish - ₱35.00
- Iced Tea (cup) - ₱20.00
- Bottled Water - ₱20.00

## Development Stages

1. Setup and interface
2. Ordering and calculations
3. Validation and final improvements
4. Final QA and readiness check

## Run Current Stage

Open `index.html` in a browser. The current stage displays the desktop-friendly responsive POS layout, the six cafeteria products, working cart behavior, stricter quantity and payment validation, change computation, payment confirmation, receipt generation in a pop-up modal, and New Transaction reset.

## Stage 4 Final Test

Add 2 Fried Chicken, 1 Rice (Plain), and 1 Iced Tea. The order total should be ₱165.00. Enter ₱200.00 as the amount paid and confirm payment. The app should show ₱35.00 change and generate a receipt with a transaction reference.

Also test these cases before taking screenshots or committing:

- Blank, non-numeric, negative, and insufficient payment values show clear error messages.
- Quantity values cannot be zero, negative, decimal, or blank.
- Item increase, decrease, and remove controls update the total immediately.
- The digital receipt opens as a modal after successful payment and can be reopened with View Receipt.
- New Transaction clears the cart, payment amount, payment message, receipt, and total.

Validation notes are recorded in `references/stage-04-validation-notes.md`.
