## The Staff API Flow

Let's map the restaurant staff's user journey to the API flow.

### 1. Order Display

After a patron places an order, it appears on the expeditor's KDS. To fetch new orders for the current day, the API client uses:

**GET** `/orders`

**Query Parameters:**

- Filter by creation date and status:
  ```
  ?filter=created_at.gt~2024-07-02%7Cstatus.eq~Received
  ```
- Fields to include:
  ```
  ?fields=table_number%7Cpriority%7Cdish_ids
  ```

**Example Request:**

```bash
curl -X 'GET' \
'http://localhost:80/orders?filter=created_at.gt~2024-07-02%7Cstatus.eq~Received&fields=table_number%7Cpriority%7Cdish_ids' \
-H 'accept: application/json'
```

**Response:**

```json
{
  "results": [
    {
      "id": "66d985d43134621c2223e521",
      "priority": 3,
      "dish_ids": ["66d6e3749d60891abff84815", "66d6e3749d60891abff8481c"]
    }
  ],
  "total_results": 5
}
```

### 2. Prioritization

The expeditor can adjust the priority of orders. By default, orders have a priority of 3. To view dish preparation times:

**GET** `/dishes/{id}`

**Example Request:**

```bash
curl -X 'GET' \
'http://localhost:80/dishes/66e6a90a5eb1ced30f93c294?fields=preparation_time' \
-H 'accept: application/json'
```

**To Update Order Priority:**

**PUT** `/orders/{order_id}`

**Example Request:**

```json
{
  "dish_ids": ["66d5755c8ee227f19183cdcb"],
  "priority": 1,
  "status": "Received"
}
```

### 3. Initiating Preparation

To set the order status to "In Progress":

**PUT** `/orders/{order_id}`

**Example Request:**

```json
{
  "dish_ids": ["66d5755c8ee227f19183cdcb"],
  "priority": 1,
  "status": "In Progress"
}
```

### 4. Order Preparation by Stations

Each dish is assigned to a station. To view dishes for a specific station:

**GET** `/orders/{order_id}/dishes`

**Query Parameters:**

- Filter by station:
  ```
  ?filter=station.eq~hot
  ```

**Example Request:**

```bash
curl -X 'GET' \
'http://localhost:80/orders/66e6a90a5eb1ced30f93c32a/dishes?fields=name%7Cingredients%7Cimage_name&filter=station.eq~hot' \
-H 'accept: application/json'
```

**Response:**

```json
{
  "results": [
    {
      "id": "66d6e3749d60891abff8481c",
      "name": "Arancini di Riso",
      "image_name": "arancini_di_riso",
      "ingredients": [
        {
          "ingredient_id": "66d6e3749d60891abff847e1",
          "is_essential": false
        },
        {
          "ingredient_id": "66d6e3749d60891abff8480f",
          "is_essential": true
        }
      ]
    }
  ],
  "total_results": 5
}
```

### 5. Display Dish Ingredients

To get ingredients for a dish:

**GET** `/dishes/{dish_id}/ingredients`

**Example Request:**

```bash
curl -X 'GET' \
'http://localhost:80/dishes/66294b2a4475a41f3e709bd2/ingredients?fields=name' \
-H 'accept: application/json'
```

**Response:**

```json
{
  "results": [
    {
      "id": "66d6e3749d60891abff847ed",
      "name": "Eggplant"
    },
    {
      "id": "66d6e3749d60891abff847f9",
      "name": "Red Wine"
    }
  ],
  "total_results": 4
}
```

### 6. Ready for Assembly

When a station finishes preparation, it marks the dish as "Ready for Assembly" on their KDS. This step is managed by the API client rather than through an API call.

### 7. Order Assembly

After assembling the order, update the status to "On the Way" (for table-side orders) or "Ready for Pickup" (for takeaway orders):

**PUT** `/orders/{order_id}`

**Example Request:**

```bash
curl -X 'PUT' \
'http://localhost:80/orders/66294b2a4475a41f3e709bcd' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: ••••••' \
-d '{
  "name": "Ben",
  "table_number": 18,
  "status": "On the Way",
  "priority": 3,
  "dish_ids": [
    "5fb3d21df15a6a415082a399",
    "60c5fe768f23023ab2f2f888",
    "612d63dc4bb92b001e313725"
  ],
  "special_requests": "No peanuts",
  "scheduled_at": null
}'
```

### 8. Staff Placing Orders

For new or scheduled orders, staff can set a "Scheduled At" datetime:

**POST** `/orders`

**Example Request:**

```bash
curl -X 'POST' \
'http://localhost:80/orders' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-H 'Authorization: ••••••' \
-d '{
  "name": "Tom",
  "table_number": null,
  "priority": 3,
  "status": "Received",
  "dish_ids": [
    "5fb3d21df15a6a415082a399",
    "60c5fe768f23023ab2f2f888",
    "612d63dc4bb92b001e313725"
  ],
  "special_requests": "No soy.",
  "scheduled_at": "2024-09-12T12:12:27.471Z"
}'
```
