# Session #5: Teacher Aid - Documenting the Auth Resource

### Prerequisites

- Open the `openapi.yml` file (blank) from the `api-documentation-course/openapi` folder in Swagger Editor.

### Summarizing Endpoints

#### Checklist for the Component

- [ ] Define the "users" of the API (e.g., API client).
- [ ] Highlight key fields that provide meaningful information.
- [ ] Clarify the server’s behavior.
- [ ] Document client UI interactions.
- [ ] Explain how responses are used (e.g., IDs or fields in subsequent requests).

#### Add Content to the OpenAPI Spec

```yaml
summary: Authenticate user and obtain an access token
```

#### Analyze the Content Against the Checklist

- **Verb** (not POST) – Precisely describes the action: "Authenticate".
- **Object** – Clarifies the target or recipient of the operation: "User".
- **Objective** – Clearly states the endpoint’s purpose: "Obtain an access token".

---

## Documenting Endpoints

#### Checklist for the Component

- [ ] Clearly define the "actors" of the endpoint (e.g., API clients or app end users).
- [ ] Highlight key fields providing meaningful information
- [ ] Clarify server behavior
- [ ] Document client UI interactions
- [ ] Explain how responses are used (e.g., ids or fields in subsequent requests)

Here’s how the content fulfills the best practices checklist:

#### Add Content to the OpenAPI Spec

```yaml
description: |
  This operation exchanges the user's username and password directly for an access token. The client ID and client secret are used for client authentication (basic). Certain endpoints require the access token in the Authorization header to perform admin functions like creating menus. If an existing access token is associated with the user, it will be invalidated before a new one is generated.
```

#### Analyze the Content Against the Checklist

- **Clearly define the "actors" of the endpoint (e.g., API clients or app end users):**
  - The description identifies the **user** as the actor providing the username and password, as well as the **client** (API client) using the client ID and secret for authentication.
- **Highlight key fields providing meaningful information:**

  - The key fields, such as `username`, `password`, `client ID`, `client secret`, and `access token`, are explicitly mentioned, helping to clarify what data is being exchanged and authenticated.

- **Clarify server behavior:**
  - The description details how the server handles the request: it exchanges the credentials for an access token, invalidates existing tokens, and expects the new token to be included in the Authorization header for further interactions, particularly admin actions.
- **Document client UI interactions:**
  - The description mentions the client needing to authenticate with a `client ID` and `client secret`, which can be linked to a client-side process where the UI requests these fields from the user.
- **Explain how responses are used (e.g., IDs or fields in subsequent requests):**
  - The generated `access token` is the key output of the endpoint, which will be required for subsequent requests to secure endpoints, specifically for admin functions like creating menus. This highlights the importance of including the token in the `Authorization` header.

---

## Documentating Fields

#### Checklist for the Component

- [ ] **General Checklist**
  - [ ] **Identify the Field**
  - [ ] **Purpose and Usage**
    - [ ] Explain the field's purpose
    - [ ] Describe its context and usage
  - [ ] **Effect of Values**
    - [ ] Describe the impact of values entered
    - [ ] Explain available options and server logic
  - [ ] **Field Interactions**
    - [ ] Detail interactions with other fields to achieve specific effects.
  - [ ] **Describing Fields Consistently**
    - [ ] Standardize across endpoints (e.g., timestamps)
    - [ ] Standardize in requests and responses
    - [ ] Define pre and post API call certainty
    - [ ] Balance precision with length (2-3 sentences)
    - [ ] Balance formal/informal language
    - [ ] Avoid repeating metadata (except for patterns)
- [ ] **Addressing Data Types**
  - **Object**
    - [ ] Clarify real-world domain model and role
    - [ ] Define high-level conceptual properties
    - [ ] Identify subresources and their relationships
  - **Strings**
    - [ ] Specify format (e.g., date, datetime)
    - [ ] Define specific date format, if applicable
    - [ ] Clarify if it represents an ID with a defined format
  - **Numeric (Floats/Integers)**
    - [ ] Define what the number represents
    - [ ] Specify constraints (e.g., min/max values)
    - [ ] Ensure consistency across endpoints
  - **Boolean**
    - [ ] Define what "true" and "false" indicate
    - [ ] Clarify default values if specified
  - **Arrays**
    - [ ] Describe conceptual content
    - [ ] Specify constraints or rules (e.g., min length, unique items)
    - [ ] Provide examples of use cases
  - **Enum** - [ ] Provide a general description system-wide - [ ] Avoid listing ENUM values in descriptions
    Here’s an analysis of the content against the checklist for documenting fields:

#### Add Content to the OpenAPI Spec

```yaml
schemas:
  AccessToken:
    type: string
    description: A UUID to access protected resources on behalf of the resource owner. Normally has a relatively short lifespan and needs to be refreshed periodically.
    example: fa0b97b2-445f-41d2-b50f-fb3b014a301e
  ExpiresAt:
    type: string
    format: date-time
    example: '2024-04-22T10:00:00Z'
    readOnly: true
    description: The timestamp when the access token becomes invalid.
  RefreshToken:
    type: string
    description: |
      A UUID used to obtain a new access token when the current one expires. It has a longer lifespan compared to access tokens.
    example: d1a3e281-96b6-4f77-a587-7b6c8c2a96d9
```

#### Analyze the Content Against the Checklist

**General Checklist:**

- **Identify the Field:**
  - The fields `AccessToken`, `ExpiresAt`, and `RefreshToken` are clearly identified, with each described separately to enhance understanding.
- **Purpose and Usage:**

  - **AccessToken:** Its purpose is defined as a UUID used to access protected resources. The description includes how it represents the user's access and highlights its temporary nature.
  - **ExpiresAt:** Explains the field’s purpose as the expiration timestamp for the access token. It clarifies that the field is read-only and is crucial for managing token validity.
  - **RefreshToken:** Describes this field as a UUID used to refresh access tokens, explaining its longer lifespan and purpose.

- **Effect of Values:**

  - **AccessToken and RefreshToken:** Both are described as UUIDs, with examples provided to clarify their format. The server logic for their short and long lifespans is mentioned, giving users a sense of how these tokens behave.
  - **ExpiresAt:** Provides a concrete example of the date-time format, showing when the token will expire, which directly influences access control.

- **Field Interactions:**

  - The `AccessToken` and `RefreshToken` are explained as interacting with each other. When the `AccessToken` expires (as noted by `ExpiresAt`), the `RefreshToken` is used to obtain a new `AccessToken`.

- **Describing Fields Consistently:**
  - The description maintains consistency across the fields by using clear, concise sentences that balance precision with brevity. It avoids redundant metadata while including examples of the field's expected format, which helps clarify the API usage for developers.

---

**Addressing Data Types:**

- **Object:**

  - While `AccessToken`, `RefreshToken`, and `ExpiresAt` are not complex objects with subresources, they are related and interact as part of a larger token management flow.

- **Strings:**
  - Both `AccessToken` and `RefreshToken` are clearly identified as UUID strings. These strings are used as identifiers for authentication and authorization. The examples provided clarify the format.
- **Numeric, Boolean, Arrays:** (Not applicable in this case)

- **Enum:**
  - There is no ENUM field used, avoiding unnecessary listing of possible values within the description. This keeps the description focused on functionality rather than overwhelming users with options.

---

This analysis confirms that the content adheres to the best practices for documenting fields, ensuring clarity and consistency for API consumers.Here’s an analysis of the content against the checklist for documenting fields:

#### Add Content to the OpenAPI Spec

```yaml
schemas:
  AccessToken:
    type: string
    description: A UUID to access protected resources on behalf of the resource owner. Normally has a relatively short lifespan and needs to be refreshed periodically.
    example: fa0b97b2-445f-41d2-b50f-fb3b014a301e
  ExpiresAt:
    type: string
    format: date-time
    example: '2024-04-22T10:00:00Z'
    readOnly: true
    description: The timestamp when the access token becomes invalid.
  RefreshToken:
    type: string
    description: |
      A UUID used to obtain a new access token when the current one expires. It has a longer lifespan compared to access tokens.
    example: d1a3e281-96b6-4f77-a587-7b6c8c2a96d9
```

#### Analyze the Content Against the Checklist

**General Checklist:**

- **Identify the Field:**
  - The fields `AccessToken`, `ExpiresAt`, and `RefreshToken` are clearly identified, with each described separately to enhance understanding.
- **Purpose and Usage:**

  - **AccessToken:** Its purpose is defined as a UUID used to access protected resources. The description includes how it represents the user's access and highlights its temporary nature.
  - **ExpiresAt:** Explains the field’s purpose as the expiration timestamp for the access token. It clarifies that the field is read-only and is crucial for managing token validity.
  - **RefreshToken:** Describes this field as a UUID used to refresh access tokens, explaining its longer lifespan and purpose.

- **Effect of Values:**

  - **AccessToken and RefreshToken:** Both are described as UUIDs, with examples provided to clarify their format. The server logic for their short and long lifespans is mentioned, giving users a sense of how these tokens behave.
  - **ExpiresAt:** Provides a concrete example of the date-time format, showing when the token will expire, which directly influences access control.

- **Field Interactions:**

  - The `AccessToken` and `RefreshToken` are explained as interacting with each other. When the `AccessToken` expires (as noted by `ExpiresAt`), the `RefreshToken` is used to obtain a new `AccessToken`.

- **Describing Fields Consistently:**
  - The description maintains consistency across the fields by using clear, concise sentences that balance precision with brevity. It avoids redundant metadata while including examples of the field's expected format, which helps clarify the API usage for developers.

**Addressing Data Types:**

- **Object:**

  - While `AccessToken`, `RefreshToken`, and `ExpiresAt` are not complex objects with subresources, they are related and interact as part of a larger token management flow.

- **Strings:**
  - Both `AccessToken` and `RefreshToken` are clearly identified as UUID strings. These strings are used as identifiers for authentication and authorization. The examples provided clarify the format.
- **Numeric, Boolean, Arrays:** (Not applicable in this case)

- **Enum:**
  - There is no ENUM field used, avoiding unnecessary listing of possible values within the description. This keeps the description focused on functionality rather than overwhelming users with options.

---

This analysis confirms that the content adheres to the best practices for documenting fields, ensuring clarity and consistency for API consumers.
