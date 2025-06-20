# Class #7: In-Class Exercises

## Exercise #1: Summarizing an Operation

1. To open the search bar, place your cursor on the left side of the Swagger Editor. Then:

   - For Windows, hit `Ctrl + F`.
   - For Mac, hit `Cmd + F`.
   - This opens the search bar in Swagger Editor.

2. **Locate the Path**: In the Swagger Editor search bar, **add a space** then type the following:

   ```yaml
   /auth/token:
   ```

3. Hit ENTER. This should direct you to the `/auth/token` path.
4. In the `summary` field, replace `...` with the following summary:

   ```yaml
   summary: Authenticate the user and obtain an access token
   ```

5. Notice how the best practices for summaries are followed:

   - **Verb** (not POST) – Precisely describes the action: "Authenticate".
   - **Object** – Clarifies the target or recipient of the operation: "User".
   - **Objective** – Clearly states the endpoint’s purpose: "Obtain an access token".

## Exercise #2: Describing an Operation

1. **Provide an Operation Description**: Add an operation description **in the `description` field below the `summary`** you previously completed by copying and pasting the following text:

   ```yaml
   This operation exchanges the user's username and password directly for an access token.
   The client ID and client secret are used for client authentication (basic). Certain endpoints
   require the access token in the Authorization header to perform admin functions like creating menus.
   If an existing access token is associated with the user, it will be invalidated before a new one is generated.
   ```

2. Notice how the best practices for endpoint descriptions are followed:

   - [x] Clearly define the "actors" of the endpoint (e.g., API clients or app end users).
   - [x] Highlight key fields providing meaningful information.
   - [x] Clarify server behavior.
   - [x] Document client UI interactions.
   - [x] Explain how responses are used (e.g., IDs or fields in subsequent requests).

## Exercise #3: Document the Request Body Fields

1. To open the search bar (if not already open), place your cursor on the left side of the Swagger Editor. Then:
   - For Windows, hit `Ctrl + F`.
   - For Mac, hit `Cmd + F`.
   - This opens the search bar in Swagger Editor.
2. **Locate the Path**: In the Swagger Editor search bar, **add a space** then type the following:

   ```yaml
   /auth/token:
   ```

3. Hit ENTER. This should direct you to the `/auth/token` path.
4. Using the search, **locate the first instance** of the following text:

   ```yaml
   $ref: '#/components/requestBodies/CreateTokenRequest'
   ```

   Notice how the `requestBody` references a schema.

5. Next, locate the schema for the request body fields by searching for:

   ```yaml
   CreateTokenRequest:
   ```

6. For `grant_type`, add the following text to the description:

   ```yaml
   Tells the login endpoint to perform the resource owner password credential flow.
   ```

7. Notice how `user_name` and `password` reference schemas. You'll need to search for those schemas and add descriptions to those fields:

   - `UserName:`
   - `Password:`

8. For the `UserName` schema, add the following text to the description:

```yaml
The user name of the user for login purposes. It cannot contain spaces.
```

10. For the `Password` schema, add the following text to the description:

```yaml
A password must be at least eight characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &).
```

## Exercise #4: Document the Response Body Fields

1. Search for:

   ```yaml
   $ref: '#/components/schemas/Auth'
   ```

   Notice how the `201` response references a schema.

2. Please add the following text to the description field for the `201` response:

   ```yaml
   Resource created successfully. The response body contains the newly created resource.
   ```

## Exercise #5: Save your work

1. In Swagger Editor, click **File** and then select **Save as YAML**.
   - This will download the file to your computer.
2. When you begin the offline exercises, you can import the file into Swagger Editor by clicking on **File** > **Import File** and then selecting the file you downloaded previously.
