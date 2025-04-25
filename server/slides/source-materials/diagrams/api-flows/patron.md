## The Patron API Flow

### Start Browsing

The patron starts browsing the menu. The API client retrieves dishes with:

**Endpoint:** `GET /dishes`

**Request:**

```yaml
?fields=name%7Cprice%7Cimage_name&filter=category.eq~Appetizers
```

**cURL Command:**

```bash
curl -X GET "http://localhost:80/dishes?fields=name%7Cprice%7Cimage_name&filter=category.eq~Appetizers" -H "Accept: application/json"
```

**Response:**

```json
{
  "results": [
    {
      "name": "Greek salad",
      "price": 399,
      "image_name": "greek_salad",
      "ingredients": [ ... ]
    }
  ],
  "total_results": 11
}
```

The client saves ingredient details for later.

### Check Ingredient Quantities

Verify ingredient availability:

**Endpoint:** `GET /ingredients/{ingredient_id}`

**Request:**

```bash
curl -X GET 'http://localhost:80/ingredients/{ingredient_id}?fields=name%7Cin_stock_qty' -H 'accept: application/json'
```

**Response:**

```json
{
  "name": "Lettuce",
  "in_stock_qty": 3
}
```

The client disables dishes with zero essential ingredients or alerts admins.

### View Dish Details

Retrieve details of a selected dish:

**Endpoint:** `GET /dishes/{dish_id}`

**Request:**

```bash
curl -X GET 'http://localhost:80/dishes/{dish_id}?fields=name%7Cdescription%7Cprice%7Cimage_name%7Cingredients' -H 'accept: application/json'
```

**Response:**

```json
{
  "name": "Bruschetta al Pomodoro",
  "description": "Toasted bread topped with ripe tomatoes.",
  "price": 7999,
  "image_name": "bruschetta_al_pomodoro",
  "ingredients": [ ... ]
}
```

### Adding Dishes and Viewing the Bill

The client tracks dishes added to the order and retrieves details from local storage for the bill.

### Place Order

Place the order with:

**Endpoint:** `POST /orders`

**Request:**

```bash
curl -X POST 'http://localhost:80/orders' -H 'accept: application/json' -H 'Content-Type: application/json' -H 'Authorization: ••••••' -d '{
  "name": "Benjamin",
  "table_number": 18,
  "dish_ids": [ ... ],
  "special_requests": "No peanuts",
  "scheduled_at": null
}'
```

**Response:**

```json
{
  "id": "66e2d159ea5ad311fdfc55a3",
  "created_at": "2024-09-12T11:32:41.440Z",
  "updated_at": "2024-09-12T11:32:41.440Z",
  "scheduled_at": null,
  "table_number": 18,
  "status": "Received",
  "priority": 3,
  "dish_ids": [ ... ]
}
```

**Noteworthy Fields:**

- `status`: `Received` (indicates preparation will start)
- `priority`: Initial priority is `3` (medium)

### Order Confirmation

The patron receives confirmation, and the order details are sent to the staff to begin preparation.
