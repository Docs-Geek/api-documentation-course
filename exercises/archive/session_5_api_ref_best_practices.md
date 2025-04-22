# API Documentation Checklist

## Summarizing Operations

- [ ] The **verb** (except POST) — to specify the action being performed.
- [ ] The **target object** — to clarify what the action is applied to.
- [ ] The **objective** — to succinctly state the operation's purpose.

## Documenting Operations

- [ ] Clearly define the **actors** involved (e.g., API clients or end users).
- [ ] Highlight **key fields** and their significance.
- [ ] Clarify the **server's behavior** for the given operation.
- [ ] Document any **client UI interactions** relevant to the operation.
- [ ] Explain how **responses** are utilized (e.g., IDs used in subsequent requests).

## Documenting Fields

### General Guidelines

- [ ] **Field Identification**:
  - Ensure each field is uniquely and clearly identified.
- [ ] **Purpose and Usage**:
  - Define the field's purpose and explain its usage in context.
- [ ] **Effect of Values**:
  - Describe the impact of different values entered.
  - Clarify available options and any server-side logic involved.
- [ ] **Field Interactions**:
  - Explain how this field interacts with others (if applicable).
- [ ] **Consistent Field Descriptions**:
  - Standardize descriptions across operations (e.g., timestamps).
  - Ensure consistency in both requests and responses.
  - Define any certainty about values before and after API calls.
  - Keep descriptions concise (2-3 sentences) while being precise.
  - Strike a balance between formal and informal language.
  - Avoid redundant metadata unless it serves a pattern.

### Data Type Considerations

- **Object**:
  - Clarify the real-world role and domain model for the object.
  - Define its conceptual properties and sub-resources.
- **Strings**:
  - Specify the format (e.g., date, datetime, ID).
  - Provide concrete date formats where relevant.
- **Numeric (Floats/Integers)**:
  - Define the numerical value’s purpose.
  - Outline any constraints (e.g., minimum/maximum values).
  - Ensure consistency in numerical fields across endpoints.
- **Boolean**:
  - Define what `true` and `false` indicate.
  - Clarify any default value.
- **Arrays**:
  - Describe the array’s content conceptually.
  - Specify rules or constraints (e.g., minimum length, uniqueness).
  - Provide examples of valid use cases.
- **Enum**:
  - Provide a general description system-wide.
  - Avoid listing specific enum values in the field's description unless necessary.
