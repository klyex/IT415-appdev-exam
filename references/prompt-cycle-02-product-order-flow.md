# Prompt Cycle 02 Product Order Flow

Use this cycle when building the product list and order screen.

## Goal

Create the main screen where users choose assigned-scenario products, see prices, set quantities, add items to the cart, adjust cart quantities, and remove cart items.

## Prompt To Use

```text
Help me implement the product list and order screen for my IT415 POS system using my assigned scenario: [scenario name]. It should show at least five product names with Philippine peso prices, quantity controls, and add-to-cart buttons. The cart should let the user increase quantity, decrease quantity, and remove an item. Use simple, readable code that fits my existing project structure. Include validation so quantity cannot be zero or negative, and explain what parts I should test before committing.
```

## Response Capture

Save the AI response screenshot or summarize the recommended product-list implementation, cart behavior, UI behavior, and validation.

## Evaluation

Mark the response:

- Correct if it fits the existing project, displays at least five product names and peso prices, supports quantity selection, cart quantity increase/decrease, item removal, and prevents invalid quantities.
- Partially correct if it works but needs adaptation to the project's file structure, styling, or state management.
- Incorrect if it ignores the existing codebase, removes required app behavior, or breaks the order flow.

## Modifications To Record

Record concrete edits made after the AI response, such as renaming variables, changing menu items, fixing layout, adapting code to the current framework, adding remove-item behavior, or adjusting quantity validation.

## Evidence To Produce

- Screenshot: product list or order screen with at least five products, names, and prices.
- Screenshot or visible evidence: cart controls for increasing, decreasing, and removing items.
- Commit milestone: project setup and basic interface, or the first part of core ordering functionality.

## Done Criteria

The screen clearly shows products and prices, lets the user choose quantities, adds valid items to the cart, updates quantities, and removes items from the cart.
