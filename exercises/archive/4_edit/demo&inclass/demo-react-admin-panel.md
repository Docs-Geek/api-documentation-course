# **Authentication Flow**

## **Building the Admin Panel**

1. Open a **new terminal** in VS Code (use Git Bash if you're on Windows).
2. Run the following command:

   ```bash
   ./scripts/run-admin.sh
   ```

3. Once the script executes successfully, a link to the Admin Panel will be displayed. Click the link or visit [http://localhost:5173/](http://localhost:5173/) to open the panel in your browser.

---

## **Login Page and Google Chrome Developer Tools**

Upon opening the Admin Panel, you'll land on the login page.

We’re using **Google Chrome** as the browser, and to inspect the API calls, we’ll need to open **Developer Tools**.

1. **Right-click** anywhere on the page and select **Inspect**, or press `F12`.
2. Navigate to the **Network** tab — this tab is essential for monitoring API calls between the frontend and backend.

The **Network tab** allows us to see the requests and responses as we interact with the application. For now, we don't see anything since we haven't performed any actions.

---

## **Testing the Authentication Flow**

Let’s begin by logging in using the username and password (we already have a user account set up for this example).

Once you log in, you’ll see several entries in the **Network tab**. Since we're interested only in API calls, click the **Fetch/XHR** filter to focus on those.

### **Token API Call**

One of the calls listed will be for the `token` API. Let’s break it down:

- **Headers tab**: This shows essential information such as the request URL, method (POST), and status code (201, indicating success).
- **Payload tab**: This shows the request body. You can view it in **Source** format to see the raw JSON payload, which can be copied directly into documentation. To copy it:
  1. Click below the request body.
  2. Press `Ctrl + A` (or `Cmd + A` on Mac) to select all, then right-click and select **Copy**.
- **Response tab**: Here, you’ll see the JSON response, which contains the `access_token`, `expires_at` (when the token expires), and the `refresh_token`.

The Admin Panel handles this behind the scenes by saving the `access_token` and using it in the authorization header for subsequent API calls. When the token expires, it automatically sends a request to `/auth/refresh-token` to renew it. Developers need to understand this flow so they can implement the same behavior in their own applications.

---

## **Admin UI Overview**

After logging in, you’ll land on the **Dashboard**. The left-hand side contains tabs representing various resources, which correspond to the "tags" defined in the OpenAPI specification.

Let’s work through a couple of common tasks in the Admin UI.

---

### **Creating Ingredients**

1. Navigate to the **Ingredients** tab.
2. First, **search for existing ingredients** (to avoid conflicts). If the ingredient exists, it will show up.
3. Create ingredients like `beef`, `lettuce`, `onion`, and `bun` using POST requests.
4. Try creating a `tomato`. If you receive a **409 Conflict** error, it means the ingredient already exists. This is a good reminder to search before creating.
5. Search for any missing ingredients and create them as needed.

---

### **Creating Dishes**

Once we have the ingredients, we can create dishes.

1. Search for existing dishes like **hamburger** and **milkshake**.
2. If the dish doesn’t exist, create it by selecting the necessary ingredients. When you select an ingredient, an API call is made to the ingredients endpoint to fetch its details (GET request by ID).
3. After creating the dish, you can view its details by clicking on the record, which sends another GET request by ID.

---

### **Placing and Managing Orders**

Now that we’ve created dishes, we can place an order.

1. **Place an order** with a hamburger and milkshake.
2. To update an order, search for the order by the patron’s name.
3. Click the **Edit** button, make changes, and save. This sends a **PUT** request with the updated order details.

(Note: **DELETE** functionality isn’t supported for orders yet. To cancel an order, other options will be added in future updates.)


This flow demonstrates how the Admin Panel interacts with the API, and how you can inspect and understand the key API calls (such as token generation, data retrieval, and data updates) using Chrome Developer Tools. By following this flow, developers can get a clear sense of how their applications should interact with the backend using API requests.
