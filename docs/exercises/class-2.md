# Class #2: Offline Exercises

## Course API introduction

The pretend startup you are a part of has created a POS (point-of-service) restaurant platform.

It offers a versatile REST API tailored for app developers seeking to create customized food ordering applications.

These applications span a range of functionalities, from tableside ordering and self-service kiosks to tablets used by restaurant staff to take orders.

Additionally, the API streamlines inventory management for staff, enabling tasks like tracking stock levels, creating dishes and menus, and generating reports.

During the course, you will help produce source content to support the API. However, today’s goal is solely to understand how the API functions.

In these exercises, we'll explore how to send API requests using various tools: Swagger UI and Postman. You'll follow the instructions to complete the basic API flow, which culminates in placing a food order through the course API.

---

## Part 1: Creating an Order with Swagger UI

In Part 1, we'll be creating an order using Swagger UI. Before creating an order, we need to first create the dishes that will be part of it. Each dish is made up of specific ingredients, so our process will start by creating the ingredients, followed by the dishes, and finally, assembling them into an order. We'll use Swagger UI to walk through these steps: first adding ingredients, then creating the dishes, and lastly, creating an order that includes those dishes.

The Italian dish we'll be creating is called "Pappardelle al Cinghiale (Wild Boar Pappardelle)." It contains the following ingredients:

- Wild Boar
- Juniper Berries
- Sage

### Exercise: Open Swagger UI and Add Authentication

#### Prerequisites

1. Go to [https://github.com//codespaces](https://github.com//codespaces) (sign in to GitHub if not already signed in).
2. Click the Codespace you created previously to open it.
3. Start the server by running `npm run start` in a terminal. If you are stuck, refer to:
   - [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server)
4. Complete the steps shown here: 
   - [Test Swagger UI Interactivity](https://api-course-docs.redocly.app/dev-setup#test-swagger-ui-interactivity)

#### Steps

##### 1. Add Authentication to Your API Requests

First, we'll need to add authentication so we can create and modify the course API's resources (rather than only being able to view them).

- Click the green "Authorize" button in Swagger UI. If you do not see it, scroll down a bit from the top of the screen; it will be on the right side of the screen.
- Enter the following access token in the **AccessToken** field:

  ```shell
  a1732455-42cf-4d24-a956-84adc847c0ca
  ```

- Click **Authorize** to apply credentials.

### Exercise: Create the Dish's Ingredients

First, we need to create the ingredients for our Italian dish, as the API request to create the dish requires at least one ingredient.

#### Steps

##### 1. Access the `/ingredients` Endpoint

- Navigate to the POST `/ingredients` endpoint.
- Click the "Try it out" button to make the request body editable.
- Delete the JSON code presently there.

##### 2. Create an Ingredient

- In the free-form text field, add the following JSON code sample:

  ```json
  {
    "name": "Wild Boar",
    "in_stock_qty": 3,
    "price": 5000
  }
  ```

  _JSON request body for creating an ingredient_

- Click **Execute** to send the request.

  On success, the API returns a `201 Created` status code along with the response body containing details of the new ingredient.

- In the response, copy the `id` of the newly created ingredient and save it in a text file. We'll need it later.

##### 3. Construct Request Bodies for the Remaining Ingredients

So, that takes care of the "Wild Boar" ingredient. However, there are two more ingredients required to create the dish: "Juniper Berries" and "Sage." You can easily do this by following the steps outlined in "2. Create an Ingredient."

Your task is to interpret the data presented in the tables below and convert them into two separate JSON request bodies for two separate API requests. Use the JSON request body created for the "Wild Boar" ingredient as a template. Take your time to analyze the tables, and feel free to refer to the provided answers afterward for guidance.

_**Tip**_: Write the JSON request body in a text editor for easy copying into Swagger UI.

#### "Juniper Berries" Tabular Data

The table below provides data for the "Juniper Berries" ingredient:

| Field             | Value           |
| ----------------- | --------------- |
| Name              | Juniper Berries |
| In Stock Quantity | 15              |
| Price             | 1200            |

#### "Sage" Tabular Data

The table below provides data for the "Sage" ingredient:

| Field             | Value |
| ----------------- | ----- |
| Name              | Sage  |
| In Stock Quantity | 20    |
| Price             | 800   |

Your task is to interpret this data as a JSON request body. You can use the JSON request body we created earlier for the "Wild Boar" ingredient as a reference.

#### Answer: Request Bodies for "Juniper Berries" and "Sage"

The following describes the correct format and values for the request bodies for each ingredient:

```json
{
  "name": "Juniper Berries",
  "in_stock_qty": 15,
  "price": 1200
}
```

_**Request #1: "Juniper Berries" JSON Request Body**_

```json
{
  "name": "Sage",
  "in_stock_qty": 20,
  "price": 800
}
```

_**Request #2: "Sage" JSON Request Body**_

Be sure to have the three `id` values you copied for each ingredient are on hand for the next step.

##### 4. Send Requests to Create Remaining Ingredients

Once you’ve constructed the JSON request bodies for each ingredient using the tabular data, you need to send requests to create those ingredients.

To create each remaining ingredient:

- Follow the process outlined in **2. Create an ingredient** to create "Juniper berries" first and then "Sage." You’ll need to make two separate API requests: one for "Juniper berries" and another for "Sage." Repeat the steps from **2. Create an ingredient** for each request.
- For every request, remember to copy the `id` property returned in the response body for each ingredient and save it in a text file.

---

### Exercise: Create dishes

Now that we have the ingredients to prepare the dish, we can proceed to create "Pappardelle al Cinghiale."

#### Steps

##### 1. Access the `/dishes` endpoint:

- Navigate to the POST `/dishes` endpoint.
- Click the **Try it out** button to make the request body editable.
- Delete the JSON code presently there.

##### 2. Create a dish:

- First, add the dish's basic details to the request body:

```json
{
  "name": "Pappardelle al Cinghiale",
  "description": "Wild Boar Pappardelle."
  "category": "Main Course",
  "image_name" "pappardelle_al_cinghiale",
  "preparation_time": 60,
  "price": 5099,
  "station": hot"
}
```

But wait, it appears that there is an issue with the code sample provided by the developer. The JSON is not formatted correctly, and there are **three** errors present. Please take on the challenge to identify and fix these three errors in the JSON. If you're having trouble, paste the JSON code into a validator like [JSON Formatter](https://jsonformatter.curiousconcept.com/) to interpret the error messages and fix any issues.

- Next, add information about the dish's ingredients in an `ingredients` array, substituting the value of each `ingredient_id`:

```json
{
  "name": "Pappardelle al Cinghiale",
  "description": "Wild Boar Pappardelle.",
  "category": "Main Course",
  "image_name": "pappardelle_al_cinghiale",
  "preparation_time": 60,
  "price": 5099,
  "station": "hot",
  "ingredients": [
    {
      "ingredient_id": "{{wildBoarId}}",
      "is_essential": true
    },
    {
      "ingredient_id": "{{JunipterBerriesId}}",
      "is_essential": true
    },
    {
      "ingredient_id": "{{SageId}}",
      "is_essential": false
    }
  ]
}
```

- Be sure to insert the actual IDs of the ingredients for each `ingredient_id` field. For example, you must substitute the `{{wildBoarId}}` for the actual ID of the "Wild Boar" ingredient you created previously. IDs are formatted like:

```json
"ingredient_id": "66294b2a4475a41f3e709bc5"
```

- Once you have substituted all placeholders with actual ingredient IDs, click **Execute** to send the request.
- On success, a `201 Created` status will be returned along with the API response body containing the new dish.
- In the response, copy the `id` of the newly created dish and save it in a text file. You’ll need it to create the order.

---

### Create an order

To place an order, you always need at least one dish. Now that we’ve created "Pappardelle al Cinghiale," we can place an order that includes the dish.

#### Steps

##### 1. Access the `/orders` endpoint:

- Navigate to the POST `/orders` endpoint.
- Click the **Try it out** button to make the request body editable.
- Delete the JSON code presently there.

##### 2. Add order details to the request body:

- In the free-form text field, add the following request body, replacing `{{dishId}}` with the ID of "Pappardelle al Cinghiale":

```json
{
  "name": "Jeremy",
  "table_number": 20,
  "special_requests": "No peanuts.",
  "scheduled at": null,
  "dish_ids": ["{{dishId}}"]
}
```

- Be sure to replace `{{dishId}}` with the actual ID of the dish you created previously. For example:

```json
"dish_id": "66f79c18f8d84743d26265ed"
```

- Click **Execute** to send the request.
- On success, a `201 Created` status is returned along with the API response body containing the new order.

Congratulations! You’ve successfully created an order in Swagger UI, showcasing your understanding of JSON and effectively using the **Try it out** feature.

---

## Part 2: Creating an Order with Postman

Using Swagger UI, you created ingredients, assembled a dish using those ingredients, and placed an order successfully navigating the basic flow of the API.

In this section, we will create another order, this time in the Postman app. The order will contain a new dish we’ll create using Postman.

Just as before, we need to first create a dish to include in the order. The dish is made up of specific ingredients, so our process will start by creating the ingredients, followed by the dishes, and finally, assembling them into an order.

We’ll use Postman to walk through these steps: first, adding ingredients, then creating the dishes, and lastly, creating an order that includes those dishes.

The new Italian dish we’ll be creating is called "Pasta con Sarde (Pasta with Sardines)." It contains the following ingredients:

- Sardines
- Fennel Pollen
- Pine Nuts

---

### Exercise: Open Postman and a collection

#### Steps

##### 1. Open Postman

- On your computer, open the Postman application.

##### 2. Open a Postman collection

- From the **Collections** tab (left-side), click the "Point of Service (POS) API" collection to expand it.

---

### Exercise: Create a user account and authenticate it

You need to create a user account and then authenticate your user account in order to create resources.

#### 1. Create a user account

A user account is necessary for API clients to make requests on behalf of end users. You’ll need to create your own account by selecting a username, email, and password.

To create a user account:

- Inside the collection you opened, click the **Users** folder to open it.
- Inside the **Users** folder, click the "Create a user account" request to open it.
- With the request open, click the **Body** tab.
- Inside the **Body** tab, replace the email, password, and username with your chosen values.
- Once you have entered your user details, click the blue **Send** button.

If successful, the API returns a `201 Created` status code with the response body containing your user account details.

#### 2. Authenticate your user account

Now that you have a user account, the next step is to authenticate it, allowing you to create resources using the API. Currently, you can only view resources but cannot create, update, or delete them.

To authenticate your user account:

- Click the **Auth** folder to expand it.
- Click the "Authenticate user and obtain an access token" request to open it.
- With the request open, click the **Body** tab.
- The request uses variables `{{userName}}` and `{{password}}` to automatically insert the username and password from the account you just created.
- Click the blue **Send** button.

If the request was successful, the API returns a `201 Created` status code with the response body containing details of the authentication of your user account.

The most important field returned is the `access_token`, which will be used to authenticate your requests to protected resources. Leave this request open for the next step.

Whenever you encounter a `401 Unauthorized` response code from the API, you can use the "Refresh access token" to refresh your access token.

---

### Exercise: Create the dish's ingredients

First, we need to create the ingredients for our "Pasta con Sarde" dish, as the API request to create the dish requires at least one ingredient.

#### Steps

##### 1. Access the "Create an ingredient" request

With the "Point of Service (POS) API" collection expanded, click the "Ingredients" folder to open it.

##### 2. Add ingredient details to the request body

- With the request open, click the **Body** tab.
- Inside the **Body** tab, there is an example request body. Replace the existing JSON with the following code:

```json
{
  "name": "Sardines",
  "in_stock_qty": 200,
  "price": 3000
}
```

- Click the blue **Send** button to send the request.

If the request was successful, the API returns a `201 Created` status code with the response body containing the `id` of the new ingredient.

- Copy this `id` and save it in a text file. We'll need it later.

##### 3. Create the rest of the ingredients

Next, we need to create two additional ingredients. You can easily do this by following the steps outlined in "2. Add ingredient details to the request body". Just make sure to use the specific data for the new ingredients.

Your task is to interpret the data presented in the table below and convert it into JSON format for the request body. Take your time to analyze the table, and feel free to check the provided answer afterward for guidance.

_Tip_: Write the JSON request body in a text file for easy copying into Postman.

The following are details of the two ingredients you need to create, interpreting the table data as JSON:

| Name          | In Stock Quantity | Price (in cents) |
| ------------- | ----------------- | ---------------- |
| Fennel pollen | 500               | 6600             |
| Pine nuts     | 1000              | 3599             |

Once you’ve constructed the JSON request based on the tabular data, repeat the process outlined in "2. Add ingredient details to the request body" using the new ingredient data. Be sure to copy the `id` property returned in the response for each ingredient!

**Answer: Request bodies for "Fennel Pollen" and "Pine Nuts"**

_Request #1: "Fennel Pollen" JSON request body_

```json
{
  "name": "Fennel pollen",
  "in_stock_qty": 500,
  "price": 6600
}
```

_Request #2: "Pine Nuts" JSON request body_

```json
{
  "name": "Pine nuts",
  "in_stock_qty": 1000,
  "price": 3599
}
```

Be sure to have the three `id`s you copied for each ingredient for the next step on hand.

---

### Exercise: Create dishes

Now that we have the ingredients needed to prepare the dish, we can proceed to create the "Pasta con Sarde" dish.

#### Steps

##### 1. Access the "Create a dish" request

With the "Point of Service (POS) API" collection open, click the "Dishes" folder to open it.

##### 2. Add dish details to the request body

- With the request open, click the **Body** tab.
- Inside the **Body** tab, there is an example request body. Replace the existing JSON with the following:

```json
{
  "name": "Pasta con Sarde",
  "description": "A traditional Sicilian pasta dish made with sardines, fennel, pine nuts, raisins, and breadcrumbs, giving a unique combination of savory and sweet flavors.,
  "category": "Main Course",
  "image_name": "pasta_con_sarde",
  preparation_time": 30,
  "price": 1299,
  "station": "hot",
}
```

- Oh no! Not again. The developer provided us with poorly formatted JSON. Use your JSON skills to identify and fix the errors!

- Add information about the dish's ingredients to an `ingredients` array, adding the ID of each ingredient. The request body should look like the following (except for the ingredient IDs):

```json
{
  "name": "Pasta con Sarde",
  "description": "A traditional Sicilian pasta dish made with sardines, fennel, pine nuts, raisins, and breadcrumbs, giving a unique combination of savory and sweet flavors.",
  "category": "Main Course",
  "image_name": "pasta_con_sarde",
  "ingredients": [
    {
      "ingredient_id": "{{sardinesId}}",
      "is_essential": true
    },
    {
      "ingredient_id": "{{fennelId}}",
      "is_essential": true
    },
    {
      "ingredient_id": "{{pineNutsId}}",
      "is_essential": false
    }
  ],
  "preparation_time": 30,
  "price": 1299,
  "station": "hot"
}
```

Be sure to insert the ingredient IDs with the actual IDs of the ingredients.

---

### Exercise: Create an order

Now that we've created "Pasta con Sarde," we can place an order that includes the dish.

#### Steps

##### 1. Access the "Create an order" request

With the "Point of Service (POS) API" collection open, click the "Orders" folder to open it.

##### 2. Add order details to the request body

- With the request open, click the **Body** tab.
- Replace the existing JSON with the following:

```json
{
  "name": "Jonathan",
  "table_number": 25,
  "special_requests": "Easy on the sardines",
  "scheduled at": null
}
```

- Add a `dish_ids` array containing the ID of the dish you created previously:

```json
{
  "name": "Benjamin",
  "table_number": 18,
  "special_requests": "No peanuts",
  "scheduled at": null,
  "dish_ids": ["{{dishId}}"]
}
```

Be sure to replace `{{dishId}}` with the actual ID of the "Pasta con Sarde" dish.

---

Congratulations! You've successfully created an order in Postman, reinforcing your knowledge of JSON and effectively utilizing the Postman interface to send API requests.

Additionally, you now understand the most basic flow of the course API using two API clients: Swagger UI and Postman. Great job!

---

### Extra credit

Now that you understand the basic mechanics of the course API, challenge yourself to create one of your favorite dishes following the same steps from these exercises.