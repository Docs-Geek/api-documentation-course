# Class #6: In-Class Exercises

## The Patron API Flow

### Start Browsing

1. Open the request to retrieve a list of all dishes.
2. On the **Params** tab under **Query Parameters**, add the following parameter, interpreting the tabular data as what needs to go in the **Key** and **Value** column.

| Parameter | Field      | Operator | Value       |
| --------- | ---------- | -------- | ----------- |
| `filter`  | `category` | `.eq~`   | `Appetizer` |

3. Send the API request.
4. In the response, choose any dish with more than one ingredient. Copy and paste the following into a text file:
   - The dish ID.
   - The IDs for each of its ingredients.

### Check Ingredient Quantities

1. Open the request to view the details of a specific ingredient.
2. In the **Params** tab, remove the `{{ingredientId}}` placeholder and replace it with the ID of the first ingredient you copied previously.
3. Check if the ingredient's `in_stock_qty` is 1 or greater.
4. Repeat this process for each ingredient. Copy the quantities (`in_stock_qty`) for each ingredient into a text file.

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
2. On the **Params** tab under **Query Parameters**, add the following parameter, interpreting the tabular data as what needs to go in the **Key** and **Value** columns:

| Parameter | Field        | Operator | Value        |
| --------- | ------------ | -------- | ------------ |
| `filter`  | `status`     | `.eq~`   | `Received`   |
|           | `created_at` | `.gte~`  | `2025-01-01` |

3. Repeat the same process for this tabular data:

| Parameter | Field          |
| --------- | -------------- |
| `fields`  | `table_number` |
|           | `status`       |
|           | `priority`     |
|           | `dish_ids`     |

### Prioritization & Initiating Preparation

1. Open the "Update an Order" request.
2. Replace the value under **Path Variables** in the **Params** tab with the order ID you copied earlier.
3. In the **Body** tab, delete the JSON shown.
4. Paste the JSON object of the order you copied previously.
5. Delete the `id`, `created_at`, `updated_at`, and `scheduled_at` fields from the JSON.
6. Update the `priority` to `1` and change the `status` to `In Progress`.
7. Send the request.

### Retrieve Dishes Belonging to an Order

1. Open the request to retrieve the dishes associated with an order.
2. In the **Path Variables** section on the Params tab, add the dish Id you copied earlier.
3. On the **Params** tab under **Query Parameters**, add the following parameters, interpreting the tabular data as what needs to go in the **Key** and **Value** columns for each parameter, respectively.

| Parameter | Field     | Operator | Value |
| --------- | --------- | -------- | ----- |
| `filter`  | `station` | `.eq~`   | `hot` |

If there are not dishes returned for `hot`, try `cold` or `beverages` instead.

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
2. On the **Body** tab, in the JSON you pasted earlier, update the `status` to `Ready for Pickup`.
3. Click **Send** to execute the request.
4. Paste the updated order returned into the chat.
