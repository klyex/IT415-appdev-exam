# Prompt Cycle 04 Validation Debugging Refinement

Use this cycle after the main flow exists and needs testing, debugging, or polishing.

## Goal

Find and fix defects before final submission while keeping the code understandable enough to explain during checking and aligned with the PDF's required features.

## Prompt To Use

```text
Review this IT415 POS code and help me find practical bugs or missing validation. Focus on product display, add-to-cart behavior, cart quantity increase/decrease, item removal, subtotal and total computation, blank/non-numeric/negative/insufficient payment validation, computed change, payment confirmation, receipt data consistency, transaction reference, and reset behavior after a transaction. Suggest minimal fixes that preserve my current structure and are easy to explain.
```

## Response Capture

Save the AI response screenshot or summarize the bugs found, suggested fixes, and validation checks.

## Evaluation

Mark the response:

- Correct if it identifies real defects or realistic edge cases from the PDF requirements and proposes small, understandable fixes.
- Partially correct if it finds useful issues but suggests broad rewrites or changes that need simplification.
- Incorrect if it invents bugs unsupported by the code, changes the app's required behavior, or adds unnecessary complexity.

## Modifications To Record

Record each accepted fix and any rejected AI suggestion. Examples include fixing total calculation, preventing empty checkout, improving payment error messages, fixing item removal, clearing receipt data, or cleaning up duplicated code.

## Evidence To Produce

- Notes from manual test cases.
- Screenshot of successful payment.
- Optional screenshot of rejected payment.
- Screenshot or note showing new transaction reset, if it was changed.
- Commit milestone: validation, debugging, and final improvements.

## Done Criteria

The system handles normal and invalid inputs safely, meets the PDF required features, and the student can explain the final code and changes.
