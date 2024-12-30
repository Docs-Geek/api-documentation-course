# Session #4: Offline exercises

In these exercises, we’ll use the React Admin Panel to follow the user journeys of the platform’s key users—admin, staff, and patrons. We'll analyze the API calls triggered by different actions within the application, exploring how the UI interacts with the underlying API to deliver functionality. This will help us understand the relationship between user actions and the API operations that power the system.

## Part 1: Logging into the Admin Panel

### Prerequisites

Ensure Docker Desktop is open and the `api-documentation-course` container is running. If it is not, click the "Play" button on the container.

### Steps

#### 1. Open a Terminal in Visual Studio Code

<ul>
  <li>Launch Visual Studio Code.</li>
  <li>
    Go to the top menu and select <strong>Terminal</strong> >
    <strong>New Terminal</strong>.
  </li>
  <li>
    Alternatively, use the keyboard shortcut:
    <ul>
      <li>
        Windows:
        <code class="language-shell preline-code">Ctrl + (backtick)</code>
      </li>
      <li>
        macOS:
        <code class="language-shell preline-code"
          >Command (⌘) + (backtick)</code
        >
      </li>
    </ul>
  </li>
</ul>

#### 2. Building the Admin Panel

1. In the terminal, run the following command:

   ```bash
   ./scripts/run-admin.sh
   ```

2. Once the script executes successfully, a link to the Admin Panel will be displayed. Click the link or visit [http://localhost:5173/](http://localhost:5173/) to open the panel in your browser.

#### 3. Open Google Chrome Developer Tools

Upon opening the Admin Panel, you'll land on the login page.

We’re using **Google Chrome** as the browser, and to inspect the API calls, we’ll need to open **Developer Tools**.

1. **Right-click** anywhere on the page and select **Inspect**, or press `F12`.
2. Navigate to the **Network** tab — this tab is essential for monitoring API calls between the frontend and backend.

The **Network tab** allows us to see the requests and responses as we interact with the application. For now, we don't see anything since we haven't performed any actions.

#### 4. Logging into the React Admin Panel

Let’s begin by logging in using the following username and password:

- User name: <code>devuser02</code>
- Password: <code>SecureP@ss456</code>

Once you log in, you’ll see several entries in the **Network tab**. Since we're interested only in API calls, click the **Fetch/XHR** filter to focus on those.

**Token API Call**:

One of the calls listed will be for the `token` API. Let’s break it down:

- **Headers tab**: This shows essential information such as the request URL, method (POST), and status code (201, indicating success).
- **Payload tab**: This shows the request body. You can view it in **Source** format to see the raw JSON payload, which can be copied directly into documentation. To copy it:
  1. Click below the request body.
  2. Press `Ctrl + A` (or `Cmd + A` on Mac) to select all, then right-click and select **Copy**.
- **Response tab**: Here, you’ll see the JSON response, which contains the `access_token`, `expires_at` (when the token expires), and the `refresh_token`.

The Admin Panel handles this behind the scenes by saving the `access_token` and using it in the authorization header for subsequent API calls. When the token expires, it automatically sends a request to `/auth/refresh-token` to renew it. Developers need to understand this flow so they can implement the same behavior in their own applications.

## Part 2: Follow the Admin User Journey

In this part, we’ll walk through the admin's workflow as they manage tasks using the React Admin Panel.

### Prerequisites

- Ensure Docker Desktop is open, and the `api-documentation-course` container is running. If not, start it by clicking the "Play" button.
- Open Google Chrome Developer Tools as previously instructed.

### Steps

#### 1. Admin Login

The journey starts with the admin logging in to access various features. Since we're already logged in, we'll skip the login process and dive into tasks.

#### 2. Create a User

A new member has joined the admin team, and they need an account to log in.

1. In the left navigation, click "Users."
2. Open Chrome Developer Tools, and in the **Network** tab, clear previous entries (click the icon with a circle and slash).
3. Click "Create" in the top-right corner.
4. Fill in the form with your details, and set the **Role** field to "manager."
5. Save the username and password in a text editor for future use.
6. Click "Save."

After saving, a new network entry should appear in **Chrome Developer Tools** under the **Network** tab: `<code>{;} ingredients</code>`.

7. Click the profile avatar in the top-right corner and select "Logout."
8. In the **Network** tab, clear the entries again.
9. Log in with the new user credentials.

You should see a new network entry: `<code>{;} token</code>`. Locate this request and answer:

- What is the `access_token`?
- When does it expire?
- What is the name of the token used to refresh the access token?

Note that after 30 minutes youll be logged out when attempting a create/update operation in the UI since the access token expires in 30 minutes and those operations requrie authentication. simply login again using your credeitanisl.

#### 3. Check for Existing Ingredients

Admins need to ensure that ingredients are in the system before creating new dishes.

1. In the left navigation, click "Ingredients."
2. Use the **Name** filter to search for the following ingredients:
   - Trofie Pasta
   - Green Beans
   - Potatoes
   - Pine Nuts

If any of these ingredients exist, there’s no need to recreate them. If none exist, proceed to the next step.

#### 4. Create Ingredients

1. While on the "Ingredients" page, click "+ Create."
2. Enter the following details for each ingredient:

<table border="1">
  <thead>
    <tr>
      <th>Ingredient</th>
      <th>In Stock Qty</th>
      <th>Price (in cents)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Trofie Pasta</td>
      <td>50</td>
      <td>450</td>
    </tr>
    <tr>
      <td>Green Beans</td>
      <td>30</td>
      <td>300</td>
    </tr>
    <tr>
      <td>Potatoes</td>
      <td>100</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Pine Nuts</td>
      <td>20</td>
      <td>1200</td>
    </tr>
  </tbody>
</table>

1. Save each ingredient and check the **Network** tab to see the request details:
   - Request URL
   - Request Method
   - Status Code
   - Payload
   - Ingredient ID

#### 5. Create a Dish

Admins can now create the dish "Trofie al Pesto con Patate e Fagiolini."

1. Click "Dishes" in the left navigation.
2. Click "+ Create."
3. Fill in the dish details as shown below:

<table border="1">
  <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Trofie al Pesto con Patate e Fagiolini</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        A Ligurian dish featuring Trofie pasta tossed in fresh basil pesto,
        served with potatoes and green beans.
      </td>
    </tr>
    <tr>
      <td>Category</td>
      <td>Main Course</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>1500</td>
    </tr>
    <tr>
      <td>Preparation time</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Image name</td>
      <td>trofie_pesto_patate_fagiolini.jpg</td>
    </tr>
    <tr>
      <td>Station</td>
      <td>Hot</td>
    </tr>
  </tbody>
</table>

1. Add the ingredients created earlier, ensuring each is marked as "Essential."

2. Click "Save."

In **Chrome Developer Tools**, verify the request details:

- Request URL
- Request Method
- Status Code
- Payload
- Dish ID

#### 6. Update the Dish Price

Management has decided to increase the price of the new dish.

1. Search for the dish in "Dishes."
2. Open the dish details and click "Edit."
3. Update the **Price** to 2000.
4. Save the changes and verify the request in **Chrome Developer Tools**.

#### 7. Delete a Dish

Admins can remove dishes from the menu if needed.

1. Search for "Prosecco" in the **Name** filter.
2. Click the pencil icon to edit the record.
3. Scroll to the bottom and click "Delete."

In **Chrome Developer Tools**, verify the deletion with:

- Request URL
- Request Method
- Status Code

## Part 3: Follow the Patron User Journey

In this section, we’ll explore the patron’s workflow as they browse, select dishes, and place an order.

### Steps

#### 1. Browsing the Menu

1. In **Chrome Developer Tools**, navigate to the **Network** tab and clear previous entries (click the circle with a slash icon).
2. Click **Dishes** in the left-hand navigation.
3. Use the "Category" filter and type **Appetizer**. This simulates the patron selecting the "Appetizer" tab to view the list.
4. After typing **Appetizer**, new network entries should appear in the **Network** tab. Locate the entry related to filtering the dishes and identify the query string in the request URL.  
   **Answer:** `?filter=category.eq~Appetizer`.

#### 2. Selecting Dishes

1. In the **Network** tab, clear previous entries again.
2. In the list of dishes, locate the appetizer **Crostini di Fegato**. To find it, click the page "2" button at the bottom-right to navigate to the second page of the dish list.  
   New network entries will appear. Find the entry for paginating to the second page. What part of the query string deals with pagination?  
   **Answer:** `limit=10&offset=10`. This means 10 dishes are shown per page, and the second page starts after the first 10 records.

3. Click the **Crostini di Fegato** entry and copy its dish ID, as the patron wants to add it to their order.
4. Navigate back to **Dishes** in the left navigation.
5. Use the "Category" filter again, but this time filter for **Main Course**. Locate **Lasagna alla Bolognese**.  
   What is the query string for this filter action?  
   **Answer:** `?filter=category.eq~Main%20Course`.  
   Click on the dish and copy its ID.

6. Repeat this process for the **Dessert** category. Filter and locate **Gelato**.  
   What is the query string for this filter action?  
   **Answer:** `?filter=category.eq~Gelato`.  
   Copy the dish ID as before.  
   You should now have the IDs of the three dishes the patron wants to order.

#### 3. Placing the Order

1. Navigate to **Orders** in the left-hand menu.
2. Click **Create** at the top-right to start creating the order.
3. Fill in the following details:
   - **Name**: John
   - **Table Number**: 10
   - **Scheduled At**: Today’s date  
     (Note: You may need to close and reopen Chrome Developer Tools after selecting the date.)
4. For the dish field, type **Crostini di Fegato** and select it.  
   New network entries will appear in the **Network** tab. Locate the entry related to filtering by the dish name.  
   **Answer:** `filter=q.eq~Crostini%20di%20Fegato`.

5. Add the next two dishes, **Lasagna alla Bolognese** and **Gelato**.  
   What are the query strings for the selections of these dishes?  
   **Answer:**

   - `filter=q.eq~Lasagna%20alla%20Bolognese`
   - `filter=q.eq~Gelato`

6. Once all dishes are added, click **Save** to place the order.  
   After saving, new entries will appear in the **Network** tab for the order creation.  
   What is the status code and response details for this action?  
   **Answer:** `201 Created`, status: "Received", priority: "3".

## Part 4: Follow the Staff User Journey

In this section, we’ll explore the staff’s workflow as they manage and track orders from preparation to completion.

### Steps

#### 1. Viewing Orders

- Click **Orders** in the left navigation.

This simulates how an expeditor views incoming orders on the Kitchen Display System (KDS).

- In the **Network** tab, clear previous entries by clicking the circle/slash icon.

To view only new orders, filter the **Status** field by "Received." This action represents the expeditor filtering to see only new orders.

- New network entries should appear in **Chrome Developer Tools**. Scroll to the top of the list and locate the entry related to filtering the list. What is the query string in the request URL for filtering the list by status? Answer: `filter=status.eq~Received`.

#### 2. Initiating Order Preparation

- In the **Network** tab, clear previous entries.

Find the order you created earlier, with the name "John." The expeditor will change the status to "In Progress" to begin preparation.

- Click the order for "John."

New network entries will appear. Locate the one related to retrieving order details.

- What are the following details for this entry?

  - Request URL: `http://localhost/orders/{id}`
  - Request Method: `GET`
  - Status Code: `200 OK`

- Click **Edit** and change the status to "In Progress."

- In the **Network** tab, clear previous entries again. After saving, new network entries will appear. Locate the entry with the **PUT** method related to updating the order's status. In the **Payload**, find the `status` field. What is the value? Answer: `"In Progress"`.

#### 3. Station View

Now that the order status is set to "In Progress," different station chefs (e.g., hot, cold, beverages) will prepare their respective parts of the order. Let's focus on the **hot station** as an example.

- Click **Dishes** in the left navigation.
- In the **Network** tab, clear previous entries.
- Use the **Station** filter to filter by "hot." This represents chefs filtering dishes assigned to the hot station.

- Guess the query string for filtering by station. Answer: `?filter=station.eq~hot`.

The only hot dish for John's order is "Lasagna alla Bolognese."

- In the **Network** tab, clear previous entries again. Use the **Name** filter to search for "Lasagna alla Bolognese."

- Guess the combined query string for station and name filtering. Answer: `?filter=station.eq~hot%7Cname.eq~Lasagna%20alla%20Bolognese`.

- Click the record for "Lasagna alla Bolognese" to display details for the chef.

New network entries should appear. Locate the entry related to fetching dish details. In the response, find the `ingredients` array.

- What are the IDs for the following ingredients?

  - Chicken Stock
  - Bread Crumbs
  - Rosemary
  - Chicken Breast
  - Artichokes
  - Dried Tomatoes

#### 4. Completing Preparation

- Click **Orders** in the left navigation.
- Locate John’s order (either by filtering by name or navigating to the second page).
- Open the order and click **Edit**.
- Change the status to "Ready for Assembly" to indicate that preparation is complete and the expeditor can start collecting items from different stations.

- In the **Network** tab, clear previous entries. After saving, new network entries should appear. Locate the entry related to updating the order status.
- What is the request method and the `status` field value in the **Payload**? Answer: `PUT`, `"Ready for Assembly"`.

Finally, the expeditor can mark the order as "On the Way" to indicate it’s ready for delivery to the patron.

- Update the order status to "On the Way."

- In the **Network** tab, clear previous entries. Locate the entry related to this update. What is the value of the `status` field in the **Payload**? Answer: `PUT`, `"On the Way"`.

This completes the staff's workflow.

### Quiz Questions

1. What is the React Admin panel?

   - A) A simple HTML interface for static data.
   - B) A tool for designing user interfaces.
   - C) A CRUD application using the course API to display and manipulate data.
   - D) A system for managing server configurations.

2. What is displayed in the Network tab in Chrome Developer Tools for our purposes?

   - A) JavaScript errors.
   - B) API calls represented by entries showing the actions taken in the UI.
   - C) Console logs of user actions.
   - D) HTML content for the page.

3. What information does the **Headers** tab provide about an API request?

   - A) Status code and API response time.
   - B) Request URL, method, and status code.
   - C) Request payload and client-side logs.
   - D) Server memory and performance metrics.

4. What does the **Payload** tab show when it’s available for an entry?

   - A) The JSON request body included in POST or PUT operations.
   - B) The list of cookies for the request.
   - C) The headers sent with the API request.
   - D) The raw HTML of the page.

5. Why is using the React Admin panel helpful?
   - A) It allows users to create APIs.
   - B) It shows how the UI is rendered in the browser.
   - C) It lets users follow the end-user journey and understand the API calls behind CRUD operations.
   - D) It provides real-time logs of user interactions.

### Answer Key:

1. C
2. B
3. B
4. A
5. C
