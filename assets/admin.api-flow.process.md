# The Admin API Flow

Admins have full access to all resources in the system, including managing ingredients and dishes.

## Admin Login

To start, admins need to log in to access admin functionalities. This is done by making an HTTP request to the following endpoint:

**POST**

`/auth/token`

**Authenticate user and obtain an access token**

The API client sends an HTTP request, exchanging the admin's username and password for an access token:

```bash
curl -X 'POST' \
'http://localhost:80/auth/token' \
-H 'accept: application/json' \
-H 'Authorization: Basic base64encoded(client_id:client_secret)' \
-H 'Content-Type: application/json' \
-d '{
"grant_type": "password",
"password": "P@ssw0rd!",
"user_name": "admin_username"
}'
```

If successful, the server responds with a `201 Created` status code and a response body containing the access and refresh tokens.

## Create Ingredients

Ingredients are essential components used to create dishes. Admins create ingredients to manage inventory levels and ensure there are sufficient quantities available.

**POST**

`/ingredients`

**Create an ingredient**

The API client sends an HTTP request to create a new ingredient with its quantity:

```bash
curl -X 'POST' \
'http://localhost:80/ingredients' \
-H 'accept: application/json' \
-H 'Authorization: Bearer access_token' \
-H 'Content-Type: application/json' \
-d '{
"in_stock_qty": 3,
"name": "Carrots",
"price": 199
}'
```

If successful, the server responds with a `201 Created` status code and the full resource, including the ingredient ID for future use:

```json
{
  "id": "66e2fc54ea5ad311fdfc563f",
  "created_at": "2024-09-12T14:36:04.836Z",
  "updated_at": "2024-09-12T14:36:04.836Z",
  "name": "Carrots",
  "in_stock_qty": 3,
  "price": 199
}
```

## Create Dishes

Admins create dishes by associating them with the necessary ingredients.

**POST**

`/dishes`

**Create a dish**

The API client sends an HTTP request, specifying the dish’s details:

```bash
curl -X 'POST' \
'http://localhost:80/dishes' \
-H 'accept: application/json' \
-H 'Authorization: Bearer access_token' \
-H 'Content-Type: application/json' \
-d '{
"Name": "Boardwalk burger",
"description": "A delicious juicy burger.",
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
```

Ingredients can be marked as either essential or non-essential for the dish.

If successful, the server responds with a `201 Created` status code and the full resource, including details of the dish:

```json
{
  "id": "66e2fc54ea5ad311fdfc563f",
  "created_at": "2024-09-12T14:36:04.836Z",
  "updated_at": "2024-09-12T14:36:04.836Z",
  "name": "Boardwalk burger",
  "description": "A delicious juicy burger.",
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
}
```
