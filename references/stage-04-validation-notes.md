# Stage 04 Validation Notes

These notes record the final validation pass for Scenario 1 - Campus Cafeteria POS.

## Successful Transaction Test

Test order:

- Fried Chicken (1 pc), quantity 2
- Rice (Plain), quantity 1
- Iced Tea (cup), quantity 1

Expected result:

- Total: ₱165.00
- Amount paid: ₱200.00
- Change: ₱35.00

Observed result:

- Total displayed as ₱165.00.
- Payment confirmation displayed change as ₱35.00.
- Receipt modal opened after payment and displayed a transaction reference.
- New Transaction reset the cart count to 0 items and the total to ₱0.00.
- Desktop and mobile-sized browser checks confirmed that the receipt modal opens and can be closed or reopened.

## Invalid Input Tests

Observed payment validation:

- Blank payment: `Please enter a valid payment amount.`
- Non-numeric payment: `Please enter a valid payment amount.`
- Negative payment: `Please enter a valid payment amount.`
- Scientific-notation-style payment such as `1e2`: `Please enter a valid payment amount.`
- Insufficient payment for a ₱15.00 order: `Insufficient payment. Please enter at least ₱15.00.`

Observed quantity validation:

- Decimal quantity such as `1.5` resets to `1`.

## Stage 4 Refinements Made

- Tightened quantity parsing so blank, decimal, zero, and negative quantity values reset to 1.
- Tightened payment parsing to accept ordinary peso amounts with up to two decimal places.
- Updated the transaction reference to use local date and time with milliseconds.
- Improved the interface layout for a cleaner desktop view and responsive smaller-screen layout.
- Changed the digital receipt into a pop-up modal after payment confirmation.
- Added a View Receipt action so the latest receipt can be reopened before starting a new transaction.
- Removed nonessential on-screen helper/status text from the POS interface.
- Adjusted product, cart, and checkout containers for more consistent spacing and sizing.
- Refactored JavaScript into clearer product rendering, cart rendering, payment, receipt, modal, reset, and event-handler sections.
- Replaced separate quantity increase/decrease functions with one shared quantity update helper.
- Updated the interface status and README to show Stage 4 readiness.

## Remaining Submission Work

- Capture the required product/order, cart summary, payment, receipt, and GitHub commit-history screenshots.
- Fill the AI prompt documentation with exact prompts, real response summaries or screenshots, evaluation, and modifications.
- Commit the final validation/debugging changes and push to GitHub.
