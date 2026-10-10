# Prompt Cycle 01 Scope and Screen Plan

Use this cycle before building or when the system requirements are still unclear.

## Goal

Convert the activity PDF and documentation form into a practical development plan for the user's assigned food ordering and POS scenario.

## Prompt To Use

```text
I am building an IT415 food ordering and POS system for my assigned scenario: [Campus Cafeteria POS / Campus Bakery POS / Milk Tea and Beverage Shop POS / Campus Snack Bar POS / Campus Convenience Store POS]. Based on the required transaction flow--browse products, add to cart, review order, enter payment, validate and compute change, confirm payment, receipt, and new transaction--create a concise implementation plan. Include required data fields, at least five sample products with Philippine peso prices, validation rules, and the evidence I should capture for my documentation form. Do not invent screenshots or commits.
```

## Response Capture

Save a screenshot of the AI response or write a brief summary. The summary should mention the assigned scenario, planned screens or sections, data fields, validations, and evidence list.

## Evaluation

Mark the response:

- Correct if it covers the full PDF transaction flow and keeps the scope realistic for the practical exam.
- Partially correct if it covers the flow but misses required evidence or validation.
- Incorrect if it invents unsupported requirements, ignores the assigned scenario, or suggests fake evidence.

## Modifications To Record

Record any changes made to the plan, such as confirming the assigned scenario, replacing menu items, simplifying the feature list, changing the screen order, or adding missing PDF/form requirements.

## Evidence To Produce

- A short feature checklist.
- A screen or section list for the app.
- A menu dataset with names and prices.
- First commit: project setup and basic interface.

## Done Criteria

The student can explain what the POS system will do, which scenario is assigned, which screens or sections are required, and what evidence must be captured during development.
