

## Translating the admin user journey to API flow

Exercise: Sequence diagram the admin API flow

<!-- Exercise: Test the User API flow in the React Admin app -->

### Step 1: Admin Login to Admin App

- **Description:** The journey begins with the admin logging into the admin application using their credentials to gain access to administrative functions.

Endpoint:

<pre><code class="language-shell">POST /auth/token</code></pre>

cURL request:

The client app logs the user in by exchanging their username and password for an access token, which is then used in requests to access protected endpoints:

<pre><code>curl -X 'POST' \
  'http://localhost:4010/auth/token' \
  -H 'accept: application/json' \
  -H 'Authorization: Basic YWRtaW5fd2ViX2FwcDphNWQ3ZjIzZS04YjY0LTRiNGMtOWIxMS0yMWM1Y2ZkZjI1ZjE=' \
  -H 'Content-Type: application/json' \
  -d '{
  "grant_type": "password",
  "user_name": "john_doe",
  "password": "P@ssw0rd!"
}'
</code></pre>

### Step 2: Create Ingredients

- **Description:** Ingredients are fundamental components used to create dishes. Admins create ingredients and specify their `in_stock_qty` to track inventory levels accurately. This ensures there are sufficient ingredients available to fulfill customer orders.

Endpoint:

<pre><code class="language-shell">POST /ingredients
</code></pre>

cURL request:

The client apps sends an HTTP request to create a new ingredient and sets the in_stock_qty to a number greater than 0:

<pre><code>curl -X 'POST' \
  'http://localhost:4010/ingredients' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer fa0b97b2-445f-41d2-b50f-fb3b014a301e' \
  -H 'Content-Type: application/json' \
  -d '{
  "display_name": "tomato",
  "name": "tomato",
  "in_stock_qty": 3
}'
</code></pre>

Response:

The ingredient_id returned in the response can be used to associate the ingredient with a dish. The in_stock_qty can be used to track if the ingredient has a positive quantity.

### Step 3: Create Dishes

- **Description:** Admins proceed to create dishes by incorporating essential ingredients (`is_essential` set to true). This feature ensures dishes are correctly displayed in the user interface and indicates availability to customers.

Endpoint:

<pre><code class="language-shell">POST /dishes
</code></pre>

cURL request:
The client app sends an HTTP request to create a new dish with the provided information.

<pre><code>
curl -X 'POST' \
  'http://localhost:4010/dishes' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer fa0b97b2-445f-41d2-b50f-fb3b014a301e' \
  -H 'Content-Type: application/json' \
  -d '{
  "display_name": "Boardwalk burger",
  "name": "boardwalk_burger",
  "description": "A description of the dish commonly displayed in a user interface.",
  "price": 9.99,
  "image_name": "burger.jpg",
  "station": "hot",
  "ingredients": [
    {
      "ingredient_id": "66294b2a4475a41f3e709bc5",
      "is_essential": true
    },
    {
      "ingredient_id": "66294b2a4475a41f3e709bc6",
      "is_essential": true
    },
    {
      "ingredient_id": "66294b2a4475a41f3e709bc7",
      "is_essential": false
    }
  ]
}'
</code></pre>

Response:

The dish_id returned in the response can be used to associate the dish with a category.

### Step 4: Create Menu Categories

- **Description:** Before creating a menu, admins define menu categories to organize dishes logically within the food ordering application. Categories enable efficient navigation and presentation, such as displaying tabs for different types of dishes.

Endpoint:

<pre><code class="language-shell">POST /categories</code></pre>

cURL request:
The client app sends an HTTP request to create the category:

<pre><code>curl -X 'POST' \
  'http://localhost:4010/categories' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer fa0b97b2-445f-41d2-b50f-fb3b014a301e' \
  -H 'Content-Type: application/json' \
  -d '{
  "display_name": "Main course",
  "name": "main_course",
  "dish_ids": [
    "66294b2a4475a41f3e709bc0",
    "66294b2a4475a41f3e709bc1",
    "66294b2a4475a41f3e709bc2"
  ]
}'
</code></pre>

The category_id returned in the response can be used to associate the category with a menu.

### Step 5: Create Menu

- **Description:** Finally, admins compile the menu by associating previously created categories with the menu structure. This step finalizes the presentation of dishes to users within the food ordering application, ensuring a cohesive and user-friendly menu interface.

By following these organized steps, admins can systematically manage ingredients, dishes, categories, and menus within the admin application, facilitating efficient restaurant operations and enhancing the user experience for customers ordering through the app.

Endpoint:

<pre><code class="language-shell">POST /menus</code></pre>

cURL request:
The client app sends an HTTP request to create a menu:

<pre><code>curl -X 'POST' \
  'http://localhost:4010/menus' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer fa0b97b2-445f-41d2-b50f-fb3b014a301e' \
  -H 'Content-Type: application/json' \
  -d '{
  "display_name": "Dinner",
  "name": "dinner",
  "category_ids": [
    "66294b2a4475a41f3e709bbc",
    "66294b2a4475a41f3e709bbd",
    "66294b2a4475a41f3e709bbe"
  ]
}'
</code></pre>

With the menu created, the API consumer can now display the menu to patrons in the food ordering app.

### Step 4: Admin logs out

- **Description:** After the admin is done, they can log out of the admin appliaction.

Endpoint:

<pre><code class="language-shell">POST /auth/logout
</code></pre>

The client app sends an HTTP request to log out the user and invalidate the access_token:

<pre><code>curl -X 'POST' \
  'http://localhost:4010/auth/logout' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer fa0b97b2-445f-41d2-b50f-fb3b014a301e' \
  -d ''
</code></pre>

The server responds with a <code>200</code> status code authentication resource invalidated successfully.
