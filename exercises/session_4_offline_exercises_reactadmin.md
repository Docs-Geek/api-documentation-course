# Session #4: Offline Exercises - React Admin Panel

In these exercises, we’ll use the React Admin Panel to follow the user journeys of the platform’s key users—admin, staff, and patrons. We'll analyze the API calls triggered by different actions within the application, exploring how the UI interacts with the underlying API to deliver functionality. This will help us understand the relationship between user actions and the API operations that power the system.

## Prerequisites

### Local Setup

#### Prerequisites

These steps are only for users who completed the local setup. If you used the GitPod setup, skip this section and go directly to the "GitPod Setup" section. If you're unsure about "GitPod," you likely set up the project locally, so you can proceed with the instructions here.

#### Steps

#### 1. Opening a terminal in Visual Studio Code

- Open Docker Desktop and start the `api-documentation-course` container. Click "Play" if it's not running.
- Open Visual Studio Code and go to the top menu and select **Terminal** > **New Terminal**.
- Alternatively, use the keyboard shortcut:
  - Windows: `Ctrl + (backtick)`
  - macOS: `Command (⌘) + (backtick)`

#### 2. Building the Admin Panel

1. In the terminal, run the following command:
   ```bash
   ./scripts/run-admin.sh
   ```
2. Once the script executes successfully, a link to the Admin Panel will be displayed. Click the link or visit [http://localhost:5173/](http://localhost:5173/) to open the panel in your browser.
3. The login screen will appear, as shown in the [screenshot](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/images/gitpod/react-admin-login.png).

### GitPod setup

These steps apply only if you completed the GitPod setup. If you’re unfamiliar with "GitPod," you likely set up the project locally. In that case, you can skip these prerequisite steps.

#### Prerequisites

These instructions assume you've completed the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace) (if you’ve already completed the setup, there’s no need to do it again).

#### Steps

- Go to your [GitPod Workspaces](https://gitpod.io/workspaces) page and open the workspace you created as part of the GitPod setup.
- Click the workspace link to start it. If you do not see a workspace link, you likely have not completed the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace).
- Once the workspace loads, follow the instructions to [Open the React Admin Panel](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-user-guide.md#open-react-admin-panel).

## Code-along #1: Logging into the Admin Panel

### Steps

#### 1. Open Google Chrome Developer Tools

Upon opening the Admin Panel, you'll land on the login page.

We’re using **Google Chrome** as the browser, and to inspect the API calls, we’ll need to open **Developer Tools**.

1. **Right-click** anywhere on the page and select **Inspect**, or press `F12`.
2. Navigate to the **Network** tab — this tab is essential for monitoring API calls between the frontend and backend.

The **Network tab** allows us to see the requests and responses as we interact with the application. For now, we don't see anything since we haven't performed any actions.

#### 2. Logging into the React Admin Panel

Let’s begin by logging in using the following username and password:

- User name: `devuser02`
- Password: `SecureP@ss456`

Once you log in, you’ll see several entries in the **Network tab**. Since we're interested only in API calls, click the **Fetch/XHR** filter to focus on those.

#### Token API Call:

One of the calls listed will be for the `token` API. In the "Name" column, click `token`. A new panel displays on the right with several tabs. Let’s break down each tab's purpose:

- **Headers tab**: This shows essential information such as the request URL, method (POST), and status code (201, indicating success).
- **Payload tab**: This shows the request body. You can view it in **Source** format to see the raw JSON payload.
- **Response tab**: Here, you’ll see the JSON response, which contains the `access_token`, `expires_at` (when the token expires), and the `refresh_token`.

The Admin Panel handles this behind the scenes by saving the `access_token` and using it in the authorization header for subsequent API calls. When the token expires, it automatically sends a request to `/auth/refresh-token` to renew it. Developers need to understand this flow so they can implement the same behavior in their own applications.

## Code-along #2: Follow the Admin User Journey

In this part, we’ll walk through the admin's workflow as they manage tasks using the React Admin Panel.

### Prerequisites

- Ensure Docker Desktop is open, and the `api-documentation-course` container is running. If not, start it by clicking the "Play" button.
- Open Google Chrome Developer Tools as previously instructed.

### Steps

#### 1. Admin Login

The journey starts with the admin logging in to access various features. Since we're already logged in, we'll skip the login process and dive into tasks.

#### 2. Create a User

1. In the left navigation, click "Users."
2. Open Chrome Developer Tools, and in the **Network** tab, clear previous entries (click the icon with a circle and slash).
3. Click "Create" in the top-right corner.
4. Fill in the form with your details, and set the **Role** field to "manager."
5. Save the username and password in a text editor for future use.
6. Click "Save."

After saving, a new network entry should appear in **Chrome Developer Tools** under the **Network** tab: `users`.

7. Click the profile avatar in the top-right corner and select "Logout."
8. In the **Network** tab, clear the entries again.
9. Log in with the new user credentials.

You should see a new network entry: `token`. Locate this request and answer:

- What is the `access_token`?
- When does it expire?
- What is the name of the token used to refresh the access token?

Note that after 30 minutes you'll be logged out when attempting a create/update operation in the UI since the access token expires in 30 minutes, and those operations require authentication. Simply log in again using your credentials.

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

1. First, on the **Network** tab, clear previous entries (click the circle with a slash icon).
2. While on the "Ingredients" page, we will use the "+ Create" button to create 3 ingredients (you have to create the ingredients separately, one at a time).
3. Refer to the following table for the details to enter for each ingredient:

| Ingredient   | In Stock Qty | Price (in cents) |
| ------------ | ------------ | ---------------- |
| Trofie Pasta | 50           | 450              |
| Green Beans  | 30           | 300              |
| Potatoes     | 100          | 200              |
| Pine Nuts    | 20           | 1200             |

Save each ingredient.

Check the **Network** tab to see the request details for each request to create an ingredient `ingredients`. See if you can identify the following...

Here is the provided content in basic Markdown format:

- Request URL
- Request Method
- Status Code
- Payload
- Ingredient ID

### 5. Create a Dish

As an admin, you can now create the dish "Trofie al Pesto con Patate e Fagiolini."

1. Click "Dishes" in the left navigation.
2. Click "+ Create."
3. Fill in the dish details as shown below:

| Field            | Value                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Name             | Trofie al Pesto con Patate e Fagiolini                                                                    |
| Description      | A Ligurian dish featuring Trofie pasta tossed in fresh basil pesto, served with potatoes and green beans. |
| Category         | Main Course                                                                                               |
| Price            | 1500                                                                                                      |
| Preparation time | 25                                                                                                        |
| Image name       | trofie_pesto_patate_fagiolini.jpg                                                                         |
| Station          | Hot                                                                                                       |

4. Add the ingredients created earlier, ensuring each is marked as "Essential."
5. Click "Save."

In **Chrome Developer Tools**, locate the `{;} dishes` API call, then identify the following details:

- Request URL
- Request Method
- Status Code
- Payload
- Dish ID

### 6. Update the Dish Price

Management has decided to increase the price of the new dish.

1. First, clear the entries in the Network tab again.
2. Search for the dish in "Dishes."
3. Open the dish details and click "Edit."
4. Update the **Price** to 2000.
5. Save the changes.
6. On the Network tab, scroll up to the first API call. It should look similar to `{;} 6712284e6843afe8bd30e081` (the number will be different). In the **Response** tab, what is the price of the dish?

### 7. Delete a Dish

Admins can remove dishes from the menu if needed.

1. In the **Network** tab, clear the entries again.
2. Search for "Prosecco" in the **Name** filter.
3. Click the pencil icon to edit the record.
4. Scroll to the bottom and click "Delete."

In **Chrome Developer Tools**, look for a document icon. What is the Request Method and Status Code?

## Code-along #3: Follow the Patron User Journey

In this section, we’ll explore the patron’s workflow as they browse, select dishes, and place an order.

### Steps

#### 1. Browsing the Menu

1. In **Chrome Developer Tools**, navigate to the **Network** tab and clear previous entries (click the circle with a slash icon).
2. Click **Dishes** in the left-hand navigation.
3. Use the "Category" filter and type **Appetizer**. This simulates the patron selecting the "Appetizer" tab to view the list.
4. After typing **Appetizer**, new network entries should appear in the **Network** tab. Locate the entry related to filtering the dishes and identify the query string in the request URL.

   **Answer:**

   ```shell
   ?filter=category.eq~Appetizer
   ```

#### 2. Selecting Dishes

1. In the **Network** tab, clear previous entries again.
2. Clear the "Category" filter so it is blank again.
3. In the list of dishes, locate the appetizer **Crostini di Fegato**. To find it, click the page "2" button at the bottom-right to navigate to the second page of the dish list.

   New network entries will appear. Find the entry for paginating to the second page. What part of the query string deals with pagination?

   **Answer:**

   ```shell
   limit=10&offset=10
   ```

4. Click the **Crostini di Fegato** entry and copy its dish ID, as the patron wants to add it to their order. To copy the ID from the UI, you may need to close Chrome Dev tools then reopen it afterward.
5. Navigate back to **Dishes** in the left navigation.
6. Use the "Category" filter again, but this time filter for **Main Course**. What is the query string for this filter action?

   **Answer:**

   ```shell
   ?filter=category.eq~Main%20Course
   ```

   Locate **Lasagna alla Bolognese**. Click on the dish and copy its ID.

7. Repeat this process for the **Dessert** category. Filter and locate **Gelato**.

   What is the query string for this filter action?

   **Answer:**

   ```shell
   ?filter=category.eq~Gelato
   ```

   Copy the dish ID as before. You should now have the IDs of the three dishes the patron wants to order.

#### 3. Placing the Order

1. Navigate to **Orders** in the left-hand menu.
2. Click **Create** at the top-right to start creating the order.
3. Fill in the following details:
   - **Name**: John
   - **Table Number**: 10
   - **Scheduled At**: Today’s date (Note: You may need to close and reopen Chrome Developer Tools after selecting the date.)
4. For the dish field, type **Crostini di Fegato** and select it.

   New network entries will appear in the **Network** tab. Locate the entry related to filtering by the dish name.

   **Answer:**

   ```shell
   filter=q.eq~Crostini%20di%20Fegato
   ```

5. Add the next two dishes, **Lasagna alla Bolognese** and **Gelato**.

   What are the query strings for the selections of these dishes?

   **Answer:**

   - ```shell
     filter=q.eq~Lasagna%20alla%20Bolognese
     ```
   - ```shell
     filter=q.eq~Gelato
     ```

6. Once all dishes are added, click **Save** to place the order.

   After saving, new entries will appear in the **Network** tab for the order creation.

   What is the status code and response details for this action?

   **Answer:**

   ```
   201 Created, status: "Received", priority: "3"
   ```

## Code-along #4: Follow the Staff User Journey

In this section, we’ll explore the staff’s workflow as they manage and track orders from preparation to completion.

### Steps

#### 1. Viewing Orders

- Click **Orders** in the left navigation.
- This simulates how an expeditor views incoming orders on the Kitchen Display System (KDS).
- In the **Network** tab, clear previous entries by clicking the circle/slash icon.
- To view only new orders, filter the **Status** field by "Received." This action represents the expeditor filtering to see only new orders.
- New network entries should appear in **Chrome Developer Tools**. Scroll to the top of the list and locate the entry related to filtering the list. What is the query string in the request URL for filtering the list by status?

  **Answer:**

  ```shell
  filter=status.eq~Received
  ```

#### 2. Initiating Order Preparation

- In the **Network** tab, clear previous entries.
- Find the order you created earlier, with the name "John." The expeditor will change the status to "In Progress" to begin preparation.
- Click the order for "John."
- New network entries will appear. Locate the one related to retrieving order details. What are the following details for this entry?
  - Request URL: `http://localhost/orders/{id}`
  - Request Method: `GET`
  - Status Code: `200 OK`
- Click **Edit** and change the status to "In Progress."
- In the **Network** tab, clear previous entries again. After saving, new network entries will appear. Locate the entry with the **PUT** method related to updating the order's status. In the **Payload**, find the **status** field. What is the value?

  **Answer:** `"In Progress"`

#### 3. Station View

Now that the order status is set to "In Progress," different station chefs (e.g., hot, cold, beverages) will prepare their respective parts of the order. Let's focus on the **hot station** as an example.

- Click **Dishes** in the left navigation.
- In the **Network** tab, clear previous entries.
- Use the **Station** filter to view the hot station dishes.
