# Class #6: In-Class Exercises

## The Patron API Flow

### Check Ingredient Quantities

1. Open the request to view the details of a specific ingredient.
2. In the **Params** tab, remove the `{{ingredientId}}` placeholder and replace it with the ID of the first ingredient you copied previously.
3. Check if the ingredient's `in_stock_qty` is 1 or greater.
4. Repeat this process for each ingredient. Copy the quantities for each ingredient into a text file.

### View Dish Details

1. Open the request to view the details of a specific dish.
2. Replace the `{{dishId}}` path variable in the **Params** tab with the dish ID you copied earlier, then run the request.
3. Copy the name of the dish into a text editor.

### Placing an Order

1. Open the request to create an order.
2. In the `dish_ids` array, replace the `{{dishId}}` variable with the ID of the dish you copied earlier.
3. In the response, copy the ID of the newly created order; you'll need it for the next API flow.

In the chat, paste the following information that you collected earlier:

- Quantities for each ingredient
- The name of the dish that is part of the order
- The ID of the newly placed order

## The Staff API Flow

### Order Display

1. Open the request used to retrieve a list of orders.
2. In the "Param" section under "Query Parameters," add the following parameter, interpreting the tabular data as what needs to go in the **Key** and **Value** columns:

| Parameter | Field        | Operator | Value        |
| --------- | ------------ | -------- | ------------ |
| `filter`  | `status`     | `eq~`    | `Received`   |
|           | `created_at` | `gte~`   | `2025-01-01` |

3. Repeat the same process for this tabular data:

| Parameter | Field          |
| --------- | -------------- |
| `fields`  | `table_number` |
|           | `status`       |
|           | `priority`     |
|           | `dish_ids`     |

4. Copy the entire content of one of the orders into a text editor and remove the ID from the JSON object.

### Prioritization & Initiating Preparation

1. Open the "Update an Order" request.
2. In the **Body** tab, paste the JSON object of the order you copied previously.
3. Update the priority to `1` and change the status to `In Progress`.
4. Send the request.

### Retrieve Dishes Belonging to an Order

1. Open the request to retrieve the dishes associated with an order.
2. In the **Path Variables** section on the Params tab, add the dish Id you copied earlier.
3. In the **Param** section under **Query Parameters**, add the following parameters, interpreting the tabular data as what needs to go in the **Key** and **Value** columns for each parameter, respectively.

| Parameter | Field     | Operator | Value |
| --------- | --------- | -------- | ----- |
| `filter`  | `station` | `eq~`    | `hot` |

| Parameter | Field        |
| --------- | ------------ |
| `fields`  | `dish_ids`   |
|           | `name`       |
|           | `image_name` |

4. After retrieving the dishes, copy the ID of a dish.

### Display Dish Ingredients

1. Open the "Get a Dish's Ingredients" request.
2. In the **Params** tab under **Path Variables**, insert the ID of the dish you copied previously.
3. In the **Query Parameters** section on the same tab, add a projection filter (i.e., `fields`) to ensure that only the `name` field is returned in the response.

### Ready for Assembly / Order Assembly

1. Open the "Update an Order" request.
2. In the **Params** tab under **Path Variables**, insert the ID of the order you copied earlier.
3. On the **Body** tab, paste the JSON object of the order you copied previously and update the status to `Ready for Pickup`.
4. Click **Send** to execute the request.
5. Paste the updated order returned into the chat.
