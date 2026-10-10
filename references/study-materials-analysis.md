# Study Materials Analysis

## Sources Used

- Activity PDF: `C:\Users\Kyla\Downloads\IT415-Practical-Exam-POS-System.pdf`.
- Attached form: `C:\Users\Kyla\Downloads\IT415-AI-Development-and-Submission-Documentation-Form.docx`.
- Official OpenAI skills guidance: skills are directories with a required `SKILL.md`; the model sees the skill name and description during discovery; detailed material should be kept in references, scripts, or assets when needed.
- Official OpenAI plugin skill guidance: each skill should stay focused on a recognizable user goal, define workflow boundaries, explain expected inputs and outputs, and be tested with direct, indirect, incomplete, irrelevant, and edge-case requests.

## Assignment Meaning

The activity PDF is the primary specification for an IT415 midterm practical exam. It requires the student to design and build a desktop or laptop food ordering and point-of-sale application within a 2.5-hour laboratory examination. The attached form is a submission documentation template for the same activity. Neither document is a command for Codex to complete the student's declaration or fabricate evidence.

The PDF provides five possible assigned scenarios:

- Scenario 1: Campus Cafeteria POS.
- Scenario 2: Campus Bakery POS.
- Scenario 3: Milk Tea and Beverage Shop POS.
- Scenario 4: Campus Snack Bar POS.
- Scenario 5: Campus Convenience Store POS.

Build and submit only the assigned scenario. Product names can be adjusted slightly, but the app must keep at least five priced products and use Philippine pesos.

The earlier apparent scenario was Campus Cafeteria, based on the repository name:

`https://github.com/salasjems-ops/Campus-Cafeteria-POS-SALAS.git`

Confirm the assigned scenario before final implementation if the user has not explicitly provided it.

## PDF Requirements Summary

The required transaction flow is:

1. Browse products with names and prices.
2. Add one or more products to the cart and adjust quantities.
3. Review an order summary with items, quantities, subtotals, and total amount.
4. Enter the cash payment amount in a numeric input field.
5. Validate the payment and compute change.
6. Confirm payment with transaction details.
7. Show a digital receipt and allow a new transaction.

Common required features:

- Display at least five products with names and prices.
- Add products to the cart through on-screen buttons.
- Increase and decrease quantities for cart items.
- Remove products from the cart.
- Automatically recompute item subtotals and overall total whenever the cart changes.
- Display a clear order summary.
- Accept cash payment through a numeric input.
- Reject blank, non-numeric, negative, and insufficient payment amounts with clear on-screen messages.
- Calculate change as amount paid minus total amount.
- Display payment confirmation after successful payment.
- Generate a digital receipt with items, quantities, subtotals, total, amount paid, change, and transaction reference.
- Start a new transaction by clearing cart, payment amount, and receipt.

## Required Evidence

The PDF and documentation form ask for these evidence groups:

- Student information: name, student number, section or block, date, assigned scenario, and repository link.
- At least two AI prompt records used at different development points.
- For each AI prompt record: exact prompt, prompt purpose, evaluation of the AI response, modifications made by the student, and either a screenshot or brief summary of the AI response.
- Screenshots of the running application:
  - Product list or order screen with product names and prices.
  - Cart or order summary with items, quantities, subtotals, and total.
  - Payment screen with successful payment and computed change.
  - Receipt screen with items, total, amount paid, change, and transaction reference.
- GitHub commit history screenshot and a matching commit list.
- Student declaration completed only by the student.

## Development Constraints

- Any language, framework, or development tool covered or demonstrated in class is allowed.
- Hard-coded products and prices are allowed.
- A database is not required.
- User login, inventory management, real payment gateway, QR payment, card payment, and deployment are not required.
- The exam prioritizes a simple, functional, readable, and testable app over advanced optional features.

## Skill Design Implications

The skill should help the user develop and document the POS system without replacing the user's work. It should guide prompting, evaluation, and evidence collection. It should not generate fake screenshots, pretend to have inspected GitHub history unless it has actually done so, or complete personal certification fields on the user's behalf.

The skill uses one main `SKILL.md` plus focused reference files because the user asked for a Markdown file for each prompting cycle. This keeps the skill discoverable and avoids loading every cycle when the user only needs one phase.

## Prompting Cycle Pattern

Each cycle should follow the same recordable loop:

1. Goal: state the feature or documentation target.
2. Prompt: write the exact AI prompt to use.
3. Response capture: save a screenshot or summary of the AI response.
4. Evaluation: mark correct, partially correct, or incorrect and explain why.
5. Modification: record what the student changed before using the result.
6. Evidence: capture the app screenshot, code change, or commit that proves the work.

## Development Coverage

The five cycle files cover the full practical exam workflow:

- Cycle 1 turns the form into a concrete scope and screen plan.
- Cycle 2 builds the product catalog, order screen, cart add buttons, quantity controls, and item removal.
- Cycle 3 builds cart review, payment validation, change computation, confirmation, receipt, and new-transaction behavior.
- Cycle 4 tests, debugs, validates, and refactors the required transaction flow.
- Cycle 5 completes screenshots, AI prompt records, and commit evidence.
