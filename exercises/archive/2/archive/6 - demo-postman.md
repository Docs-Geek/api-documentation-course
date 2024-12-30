# Demo: Postman UI Walkthrough

### Instructor Prerequisites:

1. Set up your authentication.
2. Add actual dish IDs to the "Create an Order" request.

### Postman Overview:

1. **Open Postman**:

   - The main tab to focus on is the **Collections** tab.
   - After following the README instructions, you should have imported the Postman collection. Let’s review it.

2. **Understanding the Collection**:

   - The collection consists of folders, each corresponding to a different API resource. We’ll go over what resources are later.
   - Inside each folder, you’ll find example API requests, each associated with different actions (methods). These actions include creating, retrieving, updating, and deleting resources, which you’ll see consistently across all resources.

3. **Inspecting a Request**:

   - Let’s start by opening a "Get a list of" request.
   - At the top, you’ll see a **URL bar** which shows the API endpoint.
   - The method here is **GET**, which retrieves a list of resources.
   - The URL will show `{{baseUrl}}/orders`. But what is `baseUrl`?

4. **Understanding `baseUrl`**:

   - As part of the README instructions, you downloaded an environment file along with the Postman collection.
   - Click on the **Environments** tab on the left, then select **Environment Variables**.
   - Here, you’ll see the `baseUrl` variable. This stores the base URL (`http://localhost:8080`), which is used throughout the requests.
   - For local development, this points to your machine, but in a production environment, this would be a web-accessible API URL.

5. **Query Parameters**:

   - Moving back to the request, let’s examine the **Params** tab.
   - These are query parameters that modify the results. For example, adding a `sort` parameter sorts the returned data by a specified field.
   - When you add a query parameter, it’s appended to the URL after a `?`, like `?sort=fieldname`.
   - Additionally, you can specify the sort **order** (ascending or descending), e.g., `order=asc`.

6. **Authorization**:
   - Next, let’s explore the **Authorization** tab for this request.
   - For the GET request, no authorization is needed since we’re just retrieving data. However, for requests that modify resources (such as creating or updating), authorization is typically required.

### POST Request Example:

1. **Switching to a POST request**:

   - Let’s now switch to the **POST** request for creating an order.
   - In the **Authorization** tab, you’ll notice that authorization is required, as this request modifies a resource. In this case, we need to provide a **Bearer token**.

2. **Bearer Token**:

   - The Bearer token is stored as an environment variable. Check the **Environments** tab to see the token.
   - The token is a UUID (a unique identifier), which acts like a secret password granting access to certain endpoints.

3. **Request Body**:

   - Now, go to the **Body** tab.
   - This tab contains the **JSON** object representing the order we’re creating. Here, you’ll define the values for the new order.

4. **Sending the Request**:
   - Click **Send**.
   - In the lower pane, you’ll see a **201 Created** status code, indicating success. The response body contains the new resource, including an automatically generated ID and timestamps (`created_at` and `updated_at`).

### Additional Features:

1. **Viewing Code Samples**:
   - One last feature to explore is the **Code** tab.
   - Postman provides sample code for different programming languages, which is useful for adding examples to your API documentation.
   - You can copy the code in your preferred language or use **curl**, a common tool for making API requests, which is included by default.
