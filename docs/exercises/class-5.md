# Class #5: Offline Exercises

In these exercises, we’ll use the React Admin Panel to follow the user journeys of the platform’s key users—admin, staff, and patrons. We'll analyze the API calls triggered by different actions within the application, exploring how the UI interacts with the underlying API to deliver functionality. This will help us understand the relationship between user actions and the API operations that power the system.

During the exercises, there will be quizzes. Please write down the questions and answers in a separate text file, as you will need to submit them on the Class 5 Discord channel.

## Prerequisites

1. Download and install [Google Chrome](https://www.google.com/chrome/) (if not already installed).
2. Go to [https://github.com//codespaces](https://github.com//codespaces) (sign in to GitHub if not already signed in).
3. Click the Codespace you created previously to open it.
   - Wait for the Codespace to load - You'll see the **Ports** tab with a blue circle containing the number `5`.
4. Make the API server public. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public).
5. Start the server by running `npm run start` in a terminal. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server)
6. Install React Admin Panel. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#install-the-react-admin-panel](https://api-course-docs.redocly.app/dev-setup#install-the-react-admin-panel)
7. Open the React Admin Panel. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#open-the-react-admin-panel](https://api-course-docs.redocly.app/dev-setup#open-the-react-admin-panel)
8. Login to the Admin Panel. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#login-to-the-admin-panel](https://api-course-docs.redocly.app/dev-setup#login-to-the-admin-panel)
9. Verify that you see the following screen.

   {% img src="../assets/images/react-admin-login.png" alt="Ports 4" width="100%" /%}

   - If you do not see this screen, click the button in the top-right corner and select **Logout**.

## Logging into the Admin Panel

### 1. Open Google Chrome Developer Tools

Upon opening the Admin Panel, you'll land on the login page (where you are located now).

We’re using **Google Chrome** as the browser, and to inspect the API calls, we’ll need to open **Developer Tools**.

1. **Right-click** anywhere on the page and select **Inspect**.
2. Navigate to the **Network** tab — this tab is essential for monitoring API calls between the frontend and backend.
3. Click the the Clear Network log button to clear all network entries, as show below:

   {% img src="../assets/images/chrome-clear-logs.png" alt="Ports 4" width="100%" /%}

The **Network tab** allows us to see the requests and responses as we interact with the application. For now, we don't see anything since we haven't performed any actions.

### 2. Logging into the React Admin Panel

1. Let’s begin by logging in using the following username and password:

- User name: `apiuser01`
- Password: `Passw0rd123!`

2. Click the **Sign In** button. Once you log in, you’ll see several entries in the **Network tab**.
3. Since we're interested only in API calls, click the **Fetch/XHR** filter to focus on those, as shown below:

   {% img src="assets/images/chrome-fetch-xhr.png" alt="Ports 4" width="100%" /%}

### 3. Token API Call

One of the API calls listed (or the only call listed) will be labeled `token`. In the "Name" column, click `token`. A new panel displays on the right with several tabs. Let’s break down each tab's purpose:

- **Headers tab**: This shows essential information such as the request URL, method (POST), and status code (201, indicating success).
- **Payload tab**: This shows the request body. You can view it in **Source** format to see the raw JSON payload.
- **Response tab**: Here, you’ll see the JSON response, which includes the `access_token`, `expires_at` (when the token expires), and the `refresh_token`, among other fields.

The Admin Panel handles this behind the scenes by saving the `access_token` and using it in the authorization header for subsequent API calls. When the token expires, it automatically sends a request to `/auth/refresh-token` to renew it (if you are curious, view this request in Postman to learn how to send this request manually). Developers need to understand this flow so they can implement the same behavior in their own applications.

## Follow the Admin User Journey

In this part, we’ll walk through the admin's workflow as they manage tasks using the React Admin Panel.

### 1. Admin Login

The journey starts with the admin logging in to access various features. Since we're already logged in, we'll skip the login process and dive into tasks.

### 2. Create a User

The administrator in this case is a restaurant manager responsible for creating user accounts and adding dishes to the menu. The users are the restaurant staff who will utilize applications that operate through the API in the background.

1. In the left navigation, click "Users."
2. In Chrome Developer Tools (which should be already open), and in the **Network** tab, clear previous entries, as was shown earlier (click the icon with a circle and slash on the left-side of Chrome Developer Tools).
3. In the top-right corner of the screen (not Chrome Developer tools), click **Create**.
4. Fill in the form with your details, and set the **Role** field to "staff."
5. Before clicking **Save**, copy and paste the username and password in a text editor for future use.
6. Click **Save**.

In the **Network** tab in Chrome Developer tools, a red "x" next to "users" indicates an issue with the entered **Roles**, "staff," which is not valid. To see acceptable values, click on the entry with the red "x." In the **Response** tab, you'll find that the valid roles are "patron," "expeditor," "chef," and "manager." We will use "expeditor," as this role manages kitchen orders.

The term `request.body.role` refers to the `role` field in the API request body. The "role" we submitted was invalid because it did not comply with the API's requirements. This illustrates how APIs are utilized by applications to validate data, ensuring that only properly formatted and acceptable values are accepted.

Next:

1. Refresh the page.
2. Clear the entries on the Network tab.
3. Enter "expeditor" in the **Role** field and click **Save**.
   - After saving, a new network entry should appear in **Chrome Developer Tools** under the **Network** tab: `users`.
4. Click the `users` entry.
5. Click on the "Headers" tab (if it is not already selected).
6. Expand the "General" section (if it is not already expanded).
7. Ensure that the **Request Method** is set to POST and that the **Status Code** reads "201 Created."
   - This indicates that the API request successfully created the user, as we adhered to the API rules regarding the values provided for the fields.
8. Click the profile avatar in the top-right corner (not Chrome Developer tools) and select **Logout**.
   - You are directed to the login page.
9. In the **Network** tab, clear the entries again.
10. Log in with the new user credentials you just created.

You should see a new network entry: `token` (the only without a red x). Locate this request and answer:

**Quiz #1:**

- What is the `access_token` that was used in the API request to login?
- When does it expire?
- What is the name of the token used to get a new access token once the old token expires?

Note that after 30 minutes you'll be logged out when attempting a create/update operation in the UI since the access token expires in 30 minutes, and those operations require authentication. Simply log in again using the credentials you created.

### 3. Check for Existing Ingredients

Admins need to ensure that ingredients are in the system before creating new dishes.

1. In the left navigation, click "Ingredients."
2. Use the **Name** filter to search for the following ingredients:
   - Trofie Pasta
   - Green Beans
   - Potatoes
   - Pine Nuts

Take note of which ingredients exist vs. which ones do not. If any of these ingredients exist, there’s no need to recreate them. If none exist, proceed to the next step.

### 4. Create Ingredients

1. First, on the **Network** tab, clear previous entries (click the circle with a slash icon).
2. While on the "Ingredients" page, we will use the "+ Create" button to create 3 ingredients (you have to create the ingredients separately, one at a time).
3. Click the **+Create** button in the top-right corner (not in Chrome Developer tools). Populate the form field with the following data:

| Ingredient   | In Stock Qty | Price (in cents) |
| ------------ | ------------ | ---------------- |
| Trofie Pasta | 50           | 450              |

4. Click **Save**.
5. In Chrome developer tools, in the **Network** tab, click the entry labeled `ingredients`.
6. **Quiz #2**: See if you can locate the following details:

   - Request URL
   - Request Method
   - Status Code
   - Payload
   - Ingredient ID

7. Click the **Ingredients** tab on the left-side on the screen (not in Chrome Developer tools).
8. Next, create the following ingredients one at a time using the **Create** function. Refer to the table below for the details required for each ingredient:

| Ingredient  | In Stock Qty | Price (in cents) |
| ----------- | ------------ | ---------------- |
| Green Beans | 30           | 300              |
| Potatoes    | 100          | 200              |
| Pine Nuts   | 20           | 1200             |

<!-- 8. Clear the Network tab entries.
9. We will now trigger another error intentionally. Click the Create button again, and enter the same data for "Green Beans", click Save, and  -->

### 5. Create a Dish

As an admin, you can now create the dish "Trofie Pasta".

1. Click **Dishes** in the left navigation.
2. Click **+Create**.
3. Fill in the dish details as shown below:

| Field            | Value                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Name             | Trofie al Pesto con Patate e Fagiolini                                                                                   |
| Description      | A Ligurian pasta dish of hand-rolled Trofie pasta tossed with fresh basil pesto, tender potatoes, and crisp green beans. |
| Category         | Main Course                                                                                                              |
| Price            | 1500                                                                                                                     |
| Preparation time | 25                                                                                                                       |
| Image name       | trofie_pesto_patate_fagiolini.jpg                                                                                        |
| Station          | Hot                                                                                                                      |
|                  |

1. Add the previously created ingredients by clicking the **+ingredient** button, searching for the ingredient name, marking it as "Essential,".
2. After adding all the ingredients, click **Save** to create the dish.
3. We will now intentionally trigger an error. To do this, attempt to create the same dish but omit all the ingredients, and then click "Save."
4. **Quiz 3**: In **Chrome Developer Tools**, locate the `dishes` API call marked with a red X. Then, identify the following details:
   - Request Method
   - Status Code
   - The complete error message (JSON object). What does the error message indicate? What exactly happened?

### 6. Update the Dish Price

Management has decided to increase the price of the new dish.

1. From the **Dishes** screen, search for the dish you created previously.
2. Open the dish details by clicking its row in the table.
3. Click **Edit**.
4. Update the **Price** to 2000.
5. Clear the entries in the Network tab of Chrome Developer tools.
6. Save the changes.
7. On the Network tab, click each API request until you locate the one whose **Request Method** is `PUT`.
8. **Quiz #4**:
   - What did the PUT request do?
   - How can I verify the change?

### 7. Delete a Dish

Admins and restaurant staff can remove dishes from the menu if needed. In this case, management has decided to no longer serve "Prosecco".

1. Open the **Dishes** screen again.
2. Search for "Prosecco" in the **Name** filter.
3. Click the pencil icon to edit the record.
4. In the **Network** tab, clear the entries again.
5. Scroll to the bottom and click "Delete."
6. In **Chrome Developer Tools**, look for the network entry with the document icon. What is the Request Method and Status Code?
7. Quiz #5:
   - What was returned in the response?
   - What does the **Status Code** mean?

## Follow the Patron User Journey

In this section, we’ll explore the patron’s workflow as they browse the menu, select dishes, and place an order.

### 1. Browsing the Menu

1. Click on **Dishes** in the left-hand navigation (not Chrome Developer Tools) or refresh the page if you are currently there. You should see a table containing dishes.
2. In **Chrome Developer Tools**, on the **Network** tab, clear previous entries.
3. Use the "Category" filter and type **Appetizer**. This simulates the patron selecting the "Appetizer" tab to view the list.
4. After typing **Appetizer**, new network entries should appear in the **Network** tab. Locate all entries related to filtering the dishes, ignoring others if present.
5. **Quiz #6:**
   - Write the query string for each API request in a text editor.
   - Analyze the query string of each request.
   - In simple terms, describe what is occurring in the user interface that is triggering these API requests. Break down the query string for one of the requests, explaining each component and its purpose.

### 2. Selecting Dishes

1. In the **Network** tab, clear the previous entries again.
2. Clear the "Category" filter so it is blank again (not in Chrome Developer tools).
3. Click the page "2" button at the bottom-right to navigate to the second page of the dish list.
4. New network entries will appear. Find the entry:
   - `/dishes?limit=10&offset=10&order=asc&sort=id`
5. **Quiz #7**:
   - Explain the query string
   - What initiated this API request?
   - Which parameter changes when clicking the third page? What is its value, as well as the reason for that value?
6. Click the **Crostini di Fegato** row (not the **Edit** button).
   - If you get an "Element does not exist" error, simply reload the page.
7. Numerous API requests appear on the Network tab.
8. Quiz #8:
   - Analyze the API requests.
   - Identify the two endpoints used in all the requests (each request will use one of the two).
   - What occurred when you clicked the dish?
   - Describe the role of each request that followed.
   - What information was sent to the API in each request?
   - What information was returned in the response for each type of request (those sent to one endpoint versus those sent to the other endpoint)?
9. Copy the dish's ID from the relevant API request, as the patron wants to add it to their order.
10. Navigate back to **Dishes** in the left navigation.
11. In the **Network** tab, clear the previous entries.
12. Use the "Category" filter again, but this time filter for **Main Course**.
    - If you get an "Element does not exist" error, simply reload the page.
13. Locate **Lasagna alla Bolognese**. Click on the dish and copy its ID from the user interface (no need to inspect the API requests)
14. Repeat this process for the **Dessert** category -- Filter and locate **Gelato** and copy its ID.

You should now have the IDs of the three dishes the patron wants to order.

### 3. Placing the Order

1. Navigate to **Orders** in the left-hand menu.
2. Click **Create** at the top-right to start creating the order.
3. Fill in the following details:
   - **Name**: John
   - **Table Number**: 10
   - Skip **Scheduled At**
4. In the **Network** tab, clear the previous entries.
5. For the dish field (not in Chrome Developer tools), type **Crostini di Fegato** and select it.
   - New network entries will appear in the **Network** tab.
6. **Quiz 9**:
   - Locate the entry related to filtering by the dish name and write down its query string. What parameter is used and how is it used?
   - What character in the query represents spaces?
7. Add the next two dishes, **Lasagna alla Bolognese** and **Gelato**.
8. In the **Network** tab, clear the previous entries.
9. Once all dishes are added, click **Save** to place the order.

## CFollow the Staff User Journey

In this section, we’ll explore the staff’s workflow as they manage and track orders from preparation to completion.

### 1. Viewing Orders

1. Click **Orders** in the left navigation.
2. This simulates how an expeditor views incoming orders on the Kitchen Display System (KDS).
3. In the **Network** tab, clear previous entries.
4. To view only new orders, filter the **Status** field by "Received." This action represents the expeditor filtering to see only new orders.
5. New network entries should appear in **Chrome Developer Tools**.
6. **Quiz #9**:

- Locate the entry related to filtering the list of orders.
- Which field is being filtered?
- Which comparison operator is used?
- What is the selection filter criteria?

### 2. Initiating Order Preparation

1. Find the order you created earlier, with the name "John." The expeditor will change the status to "In Progress" to begin preparation.
2. In the **Network** tab, clear previous entries.
3. Click the order for "John" (not in Chrome Developer tools).
4. New network entries will appear. Locate the one related to retrieving order details. What are the following details for this entry?
   - Request URL
   - Request Method
   - Status Code
5. Click **Edit**
6. In the **Network** tab, clear previous entries.
7. Change the status to "In Progress" (not in Chrome Developer tools).
8. Click Save.
   - After saving, new network entries will appear.
9. Locate the entry with the **PUT** method related to updating the order's status.
10. **Quiz #10**:
    - In the **Payload**, find the **status** field. What is the value?

## Submit the Answers to Quiz Questions

In the "Class 5" channel on Discord, paste the answers to the quiz questions you completed during the exercises.

## In Summary

In these exercises, we learned how user interfaces depend on APIs for data validation. When users fill out forms, the data is checked against the OpenAPI specification to ensure its validity. Although the returned data from the API isn't visible in the web app, the specification guarantees its accuracy.

We also discovered that we can observe API calls triggered by user actions, like button clicks, in the network tab. This insight helps us understand how to utilize APIs effectively and improve our documentation.

Additionally, we explored API dashboards that allow us to test user journeys and API flows via the user interface. This knowledge helps us create user-centric documentation tailored to the needs of restaurant administrators, staff, and customers.
