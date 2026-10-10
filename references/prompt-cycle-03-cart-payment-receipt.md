# Prompt Cycle 03 Cart Payment Receipt

Use this cycle when implementing totals, payment, change, and receipt output.

## Goal

Complete the transaction flow: cart summary, computed subtotals and totals, payment validation, successful payment confirmation, change, receipt, transaction reference, and new transaction reset.

## Prompt To Use

```text
Help me build the cart summary, payment, and receipt flow for my IT415 POS system. The cart should show each item, quantity, unit price, subtotal, and total. The payment screen should accept a cash amount in a numeric input field and reject blank, non-numeric, negative, and insufficient payments with clear messages. For a valid payment, compute change, show payment confirmation, and generate a receipt with items, quantities, subtotals, total, amount paid, change, and a transaction reference. Include a new transaction action that clears the cart, payment amount, and receipt. Keep the logic simple and easy to explain for checking.
```

## Response Capture

Save the response screenshot or summarize the recommended calculation logic, payment validation, confirmation behavior, receipt fields, transaction-reference approach, and reset behavior.

## Evaluation

Mark the response:

- Correct if it computes subtotals, total, payment acceptance, change, confirmation, receipt fields, and new-transaction reset accurately.
- Partially correct if the logic works but misses transaction reference, one payment validation case, reset behavior, or display details.
- Incorrect if calculations are wrong, money values can become negative, or receipt data does not match the cart.

## Modifications To Record

Record changes such as rounding money values, improving invalid-payment messages, adding a transaction reference, simplifying receipt layout, clearing transaction data, or adapting the code to the existing app state.

## Evidence To Produce

- Screenshot: cart or order summary with items, quantities, subtotals, and total.
- Screenshot: successful payment and computed change.
- Optional screenshot: rejected blank, non-numeric, negative, or insufficient payment.
- Screenshot: receipt with items, total, amount paid, change, and transaction reference.
- Commit milestone: core ordering and computation functionality.

## Done Criteria

The system can complete a sample transaction from item selection through receipt, reject invalid payment inputs, and reset cleanly for a new transaction.
