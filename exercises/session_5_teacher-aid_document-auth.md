# Session #5: Teacher Aid - Document Auth Resource

## Part 1: Document the POST `/auth` Endpoint

### Prerequisites

- Open the `openapi.yml` file (blank) from the `api-documentation-course/openapi` folder in Swagger Editor.

### Summarizing Endpoints

### Checklist for the Component

- [ ] Define the "users" of the API (e.g., API client).
- [ ] Highlight key fields that provide meaningful information.
- [ ] Clarify the server’s behavior.
- [ ] Document client UI interactions.
- [ ] Explain how responses are used (e.g., IDs or fields in subsequent requests).

### Add Content to the OpenAPI Spec

```yaml
summary: Authenticate user and obtain an access token
```

### Analyze the Content Against the Checklist

- **Verb** (not POST) – Precisely describes the action: "Authenticate".
- **Object** – Clarifies the target or recipient of the operation: "User".
- **Objective** – Clearly states the endpoint’s purpose: "Obtain an access token".

---

### Documenting Endpoints

### Checklist for the Component

- [ ] Clearly define the "actors" of the endpoint (e.g., API clients or app end users).
- [ ] Highlight key fields providing meaningful information.
- [ ] Clarify server behavior.
- [ ] Document client UI interactions.
- [ ] Explain how responses are used (e.g., IDs or fields in subsequent requests).

### Here’s how the content fulfills the best practices checklist:

### Add Content to the OpenAPI Spec

```yaml
description: |
  This operation exchanges the user's username and password directly for an access token.
  The client ID and client secret are used for client authentication (basic). Certain endpoints
  require the access token in the Authorization header to perform admin functions like creating menus.
  If an existing access token is associated with the user, it will be invalidated before a new one is generated.
```

### Analyze the Content Against the Checklist

- **Clearly define the "actors"**:
  - The description identifies the **user** as the actor providing the username and password, as well as the **client** (API client) using the client ID and secret for authentication.
- **Highlight key fields providing meaningful information**:
  - Key fields like `username`, `password`, `client ID`, `client secret`, and `access token` are explicitly mentioned.
- **Clarify server behavior**:
  - The server exchanges credentials for an access token, invalidates existing tokens, and expects the new token in the Authorization header.
- **Document client UI interactions**:
  - The client authenticates using a `client ID` and `client secret`.
- **Explain how responses are used**:
  - The generated `access token` is required for secure endpoints, particularly for admin functions.

---

### Documenting Fields

#### Checklist for the Component

##### General Guidelines

- [ ] **Field Identification**:
  - Ensure each field is uniquely and clearly identified.
- [ ] **Purpose and Usage**:
  - Define the field's purpose and explain its usage in context.
- [ ] **Effect of Values**:
  - Describe the impact of different values entered.
  - Clarify available options and any server-side logic.
- [ ] **Field Interactions**:
  - Explain how this field interacts with others (if applicable).
- [ ] **Consistent Field Descriptions**:
  - Standardize descriptions across endpoints.
  - Ensure consistency in both requests and responses.
  - Keep descriptions concise (2-3 sentences) while being precise.

##### Data Type Considerations

- **Object**:
  - Clarify the real-world role and domain model for the object.
- **Strings**:
  - Specify the format (e.g., date, datetime, ID).
- **Numeric (Floats/Integers)**:
  - Define the numerical value’s purpose and constraints.
- **Boolean**:
  - Define what `true` and `false` indicate.
- **Arrays**:
  - Describe the array’s content conceptually and specify rules.
- **Enum**:
  - Provide a general description system-wide.

---

### Add Content to the OpenAPI Spec

```yaml
schemas:
  AccessToken:
    type: string
    description: A UUID to access protected resources on behalf of the resource owner.
    Normally has a relatively short lifespan and needs to be refreshed periodically.
    example: fa0b97b2-67af-4f1f-afe5-e28f20b9f8ec
```

### Analyze the Content Against the Checklist

- **Identify the Field**: The field is identified as `AccessToken`.
- **Purpose and Usage**:
  - Clearly described as an identifier for accessing protected resources.
- **Effect of Values**:
  - Clarifies that the UUID represents the access token.
- **Field Interactions**:
  - The access token must be included in the Authorization header for interactions.
