# Class #6: Teacher Aid

The following is performed in Postman.

## Teacher Demo

### The Auth API Flow

- Account Creation
- Admin Login
- Refreshing the Access Token

### The Admin API Flow

- Admin Login
- Create Ingredients
- Create Dishes

### Set up GitHub codespace for in-exercises

**GitHub Codespace**

1. Go to [https://github.com//codespaces](https://github.com//codespaces) (sign in to GitHub if not already signed in).
2. Click the Codespace you created previously to open it.
3. Make the API server public. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public)
4. Copy the Server URL:
   - Hover over the API Server (Port 80), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using NotePad or another text editor.
5. Start the server by running `npm run start` in a terminal. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server)

## The Patron API Flow - Participants task

Perform as directed in the file.

## The Staff API Flow - Teacher Walkthrough

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
