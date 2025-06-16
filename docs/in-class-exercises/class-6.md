# Class #6: In-Class Exercises

## The Patron API Flow

### Start Browsing

1. Open the request to retrieve a list of all dishes.
2. On the **Params** tab under **Query Parameters**, add the following parameter, interpreting the tabular data as what needs to go in the **Key** and **Value** column.

| Parameter | Field      | Operator | Value        |
| --------- | ---------- | -------- | ------------ |
| `filter`  | `category` | `.eq~`   | `Appetizers` |

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
