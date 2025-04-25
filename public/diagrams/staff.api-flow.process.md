# The Staff API Flow

## 1. Order Display

After the patron places an order, the order appears on the expeditor's KDS. The API client app needs to fetch orders using the following endpoint:

**Endpoint:** `GET /orders`

**Description:** Get a list of orders.

To fetch all new orders for the current day, use the following query string:

- Filter by date: `?filter=created_at.gt~2024-07-02`
- Filter by status: `?filter=status.eq~Received`
- Select specific fields: `?fields=table_number|priority|dish_ids`

Combining the filters results in this query string (not URL-encoded yet):

```bash
?filter=created_at.gt~2024-07-02|status.eq~Received&fields=table_number|priority|dish_ids
```

**Request Example:**

```bash
curl -X 'GET' \
  'http://localhost:80/orders?fields=table_number%7Cpriority%7Cdish_ids&filter=created_at.gt~2024-07-02%7Cstatus.eq~Received' \
  -H 'accept: application/json'
```

**Response Example:**

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

## 2. Prioritization

The expeditor can adjust the priority of the order. By default, orders are set to priority level 3. The expeditor may increase the priority for urgent orders. To decide which orders to prioritize, the expeditor can view the preparation time for each dish in the order.

**Endpoint:** `GET /dishes/{id}`

**Description:** Get a dish's details.

**Request Example:**

```bash
curl -X 'GET' \
  'http://localhost:80/dishes/66e6a90a5eb1ced30f93c294?fields=preparation_time' \
  -H 'accept: application/json'
```

To update the priority of an order:

**Endpoint:** `PUT /orders/{order_id}`

**Description:** Update an order.

**Request Example:**

```json
{
  "dish_ids": ["66d5755c8ee227f19183cdcb"],
  "priority": 1,
  "status": "Received"
}
```

## 3. Initiating Preparation

Once a dish is prioritized, the expeditor can initiate the preparation of the order by updating the order status to "In Progress."

**Endpoint:** `PUT /orders/{order_id}`

**Description:** Update an order.

**Request Example:**

```json
{
  "dish_ids": ["66d5755c8ee227f19183cdcb"],
  "priority": 1,
  "status": "In Progress"
}
```

## 4. Order Preparation by Stations

Each dish in the order is assigned to a specific station (e.g., cold, hot, beverages). Stations responsible for each dish see their respective parts of the order on their KDS.

**Endpoint:** `GET /orders/{order_id}/dishes`

**Description:** View an order's dishes.

To filter the dishes by station:

**Request Example:**

```bash
curl -X 'GET' \
  'http://localhost:80/orders/66e6a90a5eb1ced30f93c32a/dishes?fields=name%7Cingredients%7Cimage_name&filter=station.eq~hot' \
  -H 'accept: application/json'
```

**Response Example:**

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
          "is_essential": false,
          "_id": "66d6e3749d60891abff8481d"
        },
        {
          "ingredient_id": "66d6e3749d60891abff8480f",
          "is_essential": true,
          "_id": "66d6e3749d60891abff8481e"
        }
      ]
    }
  ],
  "total_results": 5
}
```

## 5. Display Dish Ingredients in a Station KDS

When staff begins preparing dishes at their station, they need to know each dish's ingredients.

**Endpoint:** `GET /dishes/{dish_id}/ingredients`

**Description:** Get a dish's ingredients.

**Request Example:**

```bash
curl -X 'GET' \
  'http://localhost:80/dishes/66294b2a4475a41f3e709bd2/ingredients?fields=name' \
  -H 'accept: application/json'
```

**Response Example:**

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
    },
    {
      "id": "66d6e3749d60891abff847fb",
      "name": "Saffron"
    },
    {
      "id": "66d6e3749d60891abff8480c",
      "name": "Tomato"
    }
  ],
  "total_results": 4
}
```

## 6. Ready for Assembly

When a station completes preparation of their part of the order, they mark it as "Ready for Assembly" on their KDS. The expeditor is notified when all stations have marked their parts as ready. This process is managed within the API client’s logic.

## 7. Order Assembly

The expeditor assembles the parts of the order from different stations. After assembling the order, the expeditor updates the status to show it’s ready for delivery to the patron.

**Endpoint:** `PUT /orders/{order_id}`

**Description:** Update an order.

For table-side ordering:

**Request Example:**

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

For takeaway orders, change the status to `Ready for Pickup` to indicate the order is ready for pickup from the counter.

## 8. Staff Placing Orders

Staff can place orders for various reasons, such as when a patron calls in. For catering or scheduled orders, staff can set a 'Scheduled At' datetime for when the order should be prepared.

**Endpoint:** `POST /orders`

**Description:** Place an order.

**Request Example:**

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
