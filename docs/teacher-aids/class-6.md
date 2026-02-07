# Class #6: Teacher Aid

## Overview

This class focuses on API flows using Postman. Students will learn how to interact with the POS API by following real-world user journeys for authentication, admin operations, patron ordering, and staff order management.

**Estimated Time:** 90-120 minutes

## Prerequisites

Before starting the class, ensure the following are ready:

- **Postman** installed and configured with the POS API collection
- **GitHub Codespace** set up and accessible
- **Presentation slides** for Auth, Admin, Patron, and Staff API flows
- **In-class exercises file** (class-6.md) available for students

## Code Along: Set Up GitHub Codespace for In-Class Exercises

**Timing:** 10 minutes

Walk students through setting up their development environment for the exercises.

### Steps

1. **Open GitHub Codespaces**

   - Navigate to [https://github.com/codespaces](https://github.com/codespaces)
   - Sign in to GitHub if not already signed in
   - Click on the Codespace created in previous classes to open it

2. **Make the API Server Port Public**

   - In the Codespace, locate the **Ports** tab (usually at the bottom panel)
   - Find Port 80 (API Server)
   - Right-click on Port 80 and select **Port Visibility > Public**
   - For detailed instructions, refer to: [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public)

3. **Copy the Server URL**

   - Hover over the API Server (Port 80) row
   - Right-click and select **Copy Local Address**
   - Paste this URL into a text file (using NotePad or another text editor)
   - **Important:** Students will need this URL to update their Postman environment's `baseUrl` variable

4. **Start the API Server**

   - Open a new terminal in the Codespace
   - Run the command: `npm run start`
   - Wait for the message indicating the server is running (typically "Server listening on port 80")
   - For additional guidance, refer to: [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server)

5. **Update Postman Environment**
   - In Postman, click on **Environments** in the left sidebar
   - Select the POS API environment
   - Update the `baseUrl` variable with the copied GitHub Codespace URL
   - Click **Save**

**Troubleshooting Tips:**

- If Port 80 doesn't appear, ensure the server started successfully
- If students can't make the port public, check their GitHub permissions
- Remind students to include `https://` in the URL when copying

---

## Codealong: The Auth API Flow

**Timing:** 20 minutes

**When to perform:** After presenting the Auth API Flow slides

This section demonstrates the authentication workflow, which is essential for accessing protected endpoints.

### 1. Account Creation

**Purpose:** Create a new user account that can be used for authentication.

1. **Open the Request**

   - In Postman, navigate to the **Users** folder
   - Select the request: **"Create a user account"**

2. **Review the Request**

   - **Method:** POST
   - **Endpoint:** `{{baseUrl}}/users`
   - Click on the **Body** tab to show the JSON request body

3. **Explain the Request Body**

   ```json
   {
     "user_name": "admin_user",
     "password": "SecurePass123!",
     "email": "admin@example.com",
     "role": "admin"
   }
   ```

   - Point out the required fields: `user_name`, `password`, `email`, `role`
   - Explain that `role` can be: `patron`, `staff`, or `admin`

4. **Send the Request**

   - Click **Send**
   - **Expected Response:** `201 Created`
   - Show the response body containing the created user details

5. **Highlight Automatic Token Storage**
   - Explain that the Postman collection has a test script that automatically saves the username and password to environment variables
   - Click on the **Tests** tab to show the script (optional)
   - Navigate to **Environments** to show that `userName` and `userPassword` are now populated

### 2. Admin Login (Obtain Access Token)

**Purpose:** Exchange user credentials for an access token required for protected endpoints.

1. **Open the Request**

   - Navigate to the **Auth** folder
   - Select: **"Authenticate user and obtain an access token"**

2. **Review the Request**

   - **Method:** POST
   - **Endpoint:** `{{baseUrl}}/auth/token`
   - Click on the **Body** tab

3. **Explain the Request Body**

   ```json
   {
     "user_name": "{{userName}}",
     "password": "{{userPassword}}"
   }
   ```

   - Point out that it uses the environment variables set in the previous step
   - Explain this is the standard OAuth 2.0 password grant flow

4. **Send the Request**

   - Click **Send**
   - **Expected Response:** `201 Created`

5. **Review the Response**

   ```json
   {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...",
     "token_type": "Bearer",
     "expires_in": 3600
   }
   ```

   - Explain the `access_token` is used for API authorization
   - The `refresh_token` is used to obtain a new access token when it expires
   - `expires_in` shows the token lifetime in seconds (3600 = 1 hour)

6. **Show Automatic Token Storage**
   - Navigate to **Environments** and show that `bearerToken` and `refreshToken` are now populated
   - Explain that subsequent requests will automatically use this token

### 3. Refreshing the Access Token

**Purpose:** Obtain a new access token using the refresh token when the original expires.

1. **Open the Request**

   - In the **Auth** folder
   - Select: **"Refresh access token"**

2. **Review the Request**

   - **Method:** POST
   - **Endpoint:** `{{baseUrl}}/auth/refresh`
   - Click on the **Body** tab

3. **Explain the Request Body**

   ```json
   {
     "refresh_token": "{{refreshToken}}"
   }
   ```

   - Point out it uses the refresh token from the environment

4. **Send the Request**

   - Click **Send**
   - **Expected Response:** `200 OK`
   - Show that a new `access_token` is returned

5. **Explain the Use Case**
   - In production, apps use this to maintain user sessions without requiring re-login
   - The refresh token typically has a longer lifetime than the access token

**Key Takeaways:**

- Authentication is a multi-step process
- Access tokens are temporary and must be refreshed
- Postman environment variables simplify token management

---

## Codealong: The Admin API Flow

**Timing:** 25 minutes

**When to perform:** After presenting the Admin API Flow slides

This section demonstrates how administrators manage the menu by creating ingredients and dishes.

### 1. Admin Login

**Note:** If you just completed the Auth API Flow section, the admin user is already authenticated. If starting fresh:

1. Follow the steps in **"Codealong: The Auth API Flow > Admin Login"** above
2. Ensure the `bearerToken` environment variable is populated

### 2. Create Ingredients

**Purpose:** Add ingredients to the system that will be used in dishes.

1. **Open the Request**

   - Navigate to the **Ingredients** folder
   - Select: **"Create an ingredient"**

2. **Review Authorization**

   - Click on the **Authorization** tab
   - Show that **Type** is set to **Bearer Token**
   - The **Token** field uses `{{bearerToken}}`
   - Explain that this endpoint requires admin authentication

3. **Review the Request Body**

   - Click on the **Body** tab

   ```json
   {
     "name": "Tomato",
     "category": "Vegetables",
     "in_stock_qty": 50,
     "unit": "pieces"
   }
   ```

4. **Create First Ingredient: Tomato**

   - Click **Send**
   - **Expected Response:** `201 Created`
   - Show the response includes an auto-generated `id` and timestamps
   - **Copy the ingredient ID** - you'll need it later

5. **Create Second Ingredient: Mozzarella**

   - Modify the request body:

   ```json
   {
     "name": "Mozzarella",
     "category": "Dairy",
     "in_stock_qty": 30,
     "unit": "pounds"
   }
   ```

   - Click **Send**
   - **Copy this ingredient ID** as well

6. **Create Third Ingredient: Basil**

   - Modify the request body:

   ```json
   {
     "name": "Basil",
     "category": "Herbs",
     "in_stock_qty": 20,
     "unit": "bunches"
   }
   ```

   - Click **Send**
   - **Copy this ingredient ID**

**Teaching Tip:** Keep the three ingredient IDs in a text file visible to students. They'll need these for creating dishes.

### 3. Create Dishes

**Purpose:** Create menu items that use the ingredients we just added.

1. **Open the Request**

   - Navigate to the **Dishes** folder
   - Select: **"Create a dish"**

2. **Review Authorization**

   - Click on the **Authorization** tab
   - Confirm it's using the Bearer token (same as ingredients)

3. **Review the Request Body**

   - Click on the **Body** tab
   - Explain the structure:

   ```json
   {
     "name": "Margherita Pizza",
     "category": "Main Course",
     "price": 12.99,
     "description": "Classic pizza with tomato, mozzarella, and basil",
     "image_name": "margherita-pizza.jpg",
     "station": "hot",
     "ingredient_ids": [
       "PASTE_TOMATO_ID_HERE",
       "PASTE_MOZZARELLA_ID_HERE",
       "PASTE_BASIL_ID_HERE"
     ]
   }
   ```

4. **Update Ingredient IDs**

   - Replace the placeholder IDs with the actual ingredient IDs copied earlier
   - Show students how to paste each ID into the array

5. **Send the Request**

   - Click **Send**
   - **Expected Response:** `201 Created`
   - Show the response includes the dish with all its details
   - **Copy the dish ID** for use in later exercises

6. **Explain the Fields**
   - `category`: Type of dish (Appetizers, Main Course, Desserts, Beverages)
   - `station`: Kitchen station (`hot`, `cold`, `beverages`)
   - `ingredient_ids`: Array linking to the ingredients we created

**Key Takeaways:**

- Admin operations require authentication
- Ingredients must exist before creating dishes
- Dishes reference ingredients by their IDs (relational data)

---

## Demo: Postman Query Parameters

**Timing:** 15 minutes

**When to perform:** After presenting the Patron API Flow slides

This demonstration shows students how to use query parameters to filter, sort, and customize API responses.

### Understanding Query Parameters

1. **Open the Request**

   - Navigate to the **Dishes** folder
   - Select: **"Get a list of dishes"**

2. **Show the URL Structure**

   - Point to the URL bar: `{{baseUrl}}/dishes`
   - Explain that query parameters are added after a `?` symbol
   - Multiple parameters are separated by `&`

3. **Demonstrate the Params Tab**
   - Click on the **Params** tab
   - Show the **Query Parameters** section
   - Explain that Postman provides a user-friendly interface for adding parameters

### Filter Parameters

1. **Add a Category Filter**

   - In the **Query Parameters** section, add:
     - **Key:** `filter`
     - **Value:** `category.eq~Appetizers`
   - Explain the syntax:
     - `category` is the field name
     - `.eq~` means "equals"
     - `Appetizers` is the value to match

2. **Send the Request**

   - Click **Send**
   - Show that only appetizers are returned

3. **Show the URL**
   - Point to the URL bar: `{{baseUrl}}/dishes?filter=category.eq~Appetizers`
   - Explain how Postman automatically constructs the URL

### Multiple Filters

1. **Add a Station Filter**

   - Add another parameter:
     - **Key:** `filter`
     - **Value:** `station.eq~cold`
   - Now you have two filter parameters

2. **Send the Request**
   - Click **Send**
   - Show that results match BOTH filters (appetizers AND cold station)

### Projection (Fields) Parameters

1. **Limit Returned Fields**

   - Clear the previous filters
   - Add a new parameter:
     - **Key:** `fields`
     - **Value:** `name`
   - Add another:
     - **Key:** `fields`
     - **Value:** `price`

2. **Send the Request**
   - Click **Send**
   - Show that the response only includes `name` and `price` fields
   - Explain this reduces bandwidth and improves performance

### Sort Parameters

1. **Sort by Price**

   - Clear previous parameters
   - Add:
     - **Key:** `sort`
     - **Value:** `price`
   - Add:
     - **Key:** `order`
     - **Value:** `asc`

2. **Send the Request**

   - Click **Send**
   - Show dishes are sorted by price in ascending order

3. **Change Sort Order**
   - Change `order` to `desc`
   - Click **Send**
   - Show the reversed order

### Pagination Parameters

1. **Limit Results**

   - Add:
     - **Key:** `limit`
     - **Value:** `5`
   - Add:
     - **Key:** `offset`
     - **Value:** `0`

2. **Send the Request**

   - Click **Send**
   - Show only 5 results are returned

3. **Get Next Page**
   - Change `offset` to `5`
   - Click **Send**
   - Show the next 5 results

**Key Takeaways:**

- Query parameters customize API responses
- Filters narrow down results
- Projection reduces response size
- Sorting and pagination help manage large datasets

---

## In-Class Exercise: The Patron API Flow

**Timing:** 20-30 minutes

**When to perform:** After the query parameters demo

### Instructions for Students

Direct students to open the **Class #6: In-Class Exercises** file and follow the instructions for **The Patron API Flow** section.

### What Students Will Do

1. **Start Browsing** - Filter dishes by category
2. **Check Ingredient Quantities** - Verify ingredients are in stock
3. **View Dish Details** - Get information about a specific dish
4. **Placing an Order** - Create a new order

### Teacher's Role

- Circulate to help students who encounter issues
- Monitor the chat for questions
- Be ready to demonstrate any step if multiple students are stuck

### Expected Completion

Students should paste the following into the chat:

- Quantities for each ingredient
- The name of the dish that is part of the order
- The ID of the newly placed order

### Common Issues & Solutions

- **Filter not working:** Check the syntax - it should be `category.eq~Appetizers`
- **Ingredient not found:** Ensure they're using the correct ingredient ID
- **Order creation fails:** Verify they have a valid access token (may need to re-authenticate)

---

## In-Class Exercise: The Staff API Flow

**Timing:** 20-30 minutes

**When to perform:** After students complete the Patron API Flow

### Instructions for Students

Direct students to continue with **The Staff API Flow** section in the in-class exercises file.

### What Students Will Do

1. **Order Display** - Filter orders by status and date
2. **Prioritization & Initiating Preparation** - Update order priority and status
3. **Retrieve Dishes Belonging to an Order** - Get dish details with filters
4. **Display Dish Ingredients** - View ingredients for a specific dish
5. **Ready for Assembly / Order Assembly** - Update order status to complete

### Teacher's Role

- Continue monitoring student progress
- Help with complex filtering (multiple filter parameters)
- Assist with JSON editing in the update request

### Expected Completion

Students should paste the updated order (with status "Ready for Pickup") into the chat.

### Common Issues & Solutions

- **Multiple filters confusing:** Remind students each filter is a separate row in Postman
- **Update request fails:** Check that they removed `id`, `created_at`, `updated_at`, and `scheduled_at` fields
- **No dishes returned for station filter:** Suggest trying different station values (`hot`, `cold`, `beverages`)

---

## Wrap-Up

**Timing:** 5 minutes

### Review Key Concepts

- **Authentication flow:** Create user → Get token → Use token for protected endpoints
- **Admin operations:** Creating ingredients and dishes requires admin role
- **Query parameters:** Powerful tools for filtering, sorting, and customizing responses
- **API flows:** Real-world user journeys involve multiple API calls in sequence

### Preview Next Class

- Next class will focus on documenting API endpoints using OpenAPI/Swagger
- Students will use Swagger Editor to enhance API documentation
- Remind students to complete offline exercises before next class

### Homework Reminder

Direct students to the **Class #6: Offline Exercises** file for homework assignments involving:

- Documenting API flows in Mintlify
- Creating curl examples for each flow step
- Publishing their documentation

---

## Additional Notes for Teachers

### Timing Flexibility

- If running short on time, prioritize the Auth and Admin flows in the codealong
- The Patron and Staff flows can be done primarily as exercises with minimal demonstration

### Preparation Checklist

- [ ] Test all Postman requests before class
- [ ] Have ingredient and dish IDs ready to share
- [ ] Ensure your GitHub Codespace is running
- [ ] Have the in-class exercises file open and ready to share
- [ ] Test that query parameter examples work with current data

### Troubleshooting Resources

- API Documentation: [https://api-course-docs.redocly.app](https://api-course-docs.redocly.app)
- Dev Setup Guide: [https://api-course-docs.redocly.app/dev-setup](https://api-course-docs.redocly.app/dev-setup)
- Discord support channel for technical issues
