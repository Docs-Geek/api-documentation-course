# Class #4: Offline Reading

## Creating Resources

- The POST method is an HTTP request method used to submit data to be processed by a specified resource.

- It is commonly used to create new resources on the server or to submit data for processing, such as submitting a form or uploading a file.

<!--
- A POST request sends data to a server for processing.
- Creates new resources or submits data like forms and files.
 -->

### Security

- POST requests are sometimes considered sensitive because they can initiate actions that modify or create data on the server.
- To prevent unauthorized or malicious actions, authentication is often required to verify the identity of the user making the request (API keys, tokens, OAuth).

<!--
- Can modify or create server data.
- Requires authentication (API keys, tokens, OAuth).
 -->

### Request Bodies

- POST requests typically include a request body that contains the data needed to create the resource.
- The request body must specify the media type, most commonly `application/json`, indicating the format of the data being sent.

<!--
- Includes data in the request body.
- Declares media type (usually `application/json`).
 -->

### Request Body Definitions

In OpenAPI, the schema for the request body must be defined to ensure the request data adheres to a specific structure.

Request bodies typically reference schemas that define the structure of request.

```yaml
paths:
  /orders:
    post:
      summary: Create an order
      requestBody:
        $ref: '#/components/requestBodies/CreateOrderRequest'
```

Just like when describing response bodies, request bodies are described using JSON Schema.

This schema can are found in the `components` > `requestBodies` section.

```yaml
components:
  requestBodies:
    CreateOrderRequest:
      description: Request body containing information used to create the resource.
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              name:
                type: string
                pattern: "^[^\\s]*$"
                example: 'John'
                description: The first name of the patron that placed the order. Cannot contain spaces.
              table_number:
                $ref: '#/components/schemas/TableNumber'
              dish_ids:
                $ref: '#/components/schemas/DishIds'
              special_requests:
                $ref: '#/components/schemas/SpecialRequests'
              scheduled_at:
                $ref: '#/components/schemas/ScheduledAt'
            required:
              - dish_ids
              - name
          examples:
            Order - Unscheduled:
              value:
                name: 'Ben'
                table_number: 18
                dish_ids:
                  - '692a4a34a46ecf001f35ac6f'
                  - '6a4a857c022eb7001f9b8972'
                  - '6b7c2441a0db43001f9bf377'
                special_requests: 'No peanuts.'
                scheduled at: null
            Order - Scheduled:
              value:
                name: 'Ben'
                table_number: 18
                dish_ids:
                  - '692a4a34a46ecf001f35ac6f'
                  - '6a4a857c022eb7001f9b8972'
                  - '6b7c2441a0db43001f9bf377'
                scheduled_at: '2024-08-26T09:03:18.865Z'
```

### Sending a POST request

When sending a cURL request, you can use the `-d` option to pass the JSON-formatted data as follows:

```shell
curl -X POST '{GH-CODESPACES-SERVER-URL}dishes' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: **********' \
  -d '{
    "name": "Lasagna",
    "description": "Classic Italian pasta dish with layers of pasta, rich meat sauce, béchamel, and cheese.",
    "category": "Main Course",
    "image_name": "lasagna",
    "ingredients": [
      {
        "ingredient_id": "6828c6dd0a86aeb5bf6defcb",
        "is_essential": true
      }
    ],
    "preparation_time": 45,
    "price": 999,
    "station": "hot"
  }'

```

### Response Body Definitions

In OpenAPI, the schema for the response body must be defined to ensure the response data (i.e., data returned by the server) adheres to a specific structure.

Response bodies typically reference schemas that define the structure of response.

```yaml
paths:
  /orders:
    post:
      summary: Create an order
      requestBody:
        $ref: '#/components/requestBodies/CreateOrderRequest'
      responses:
        '201':
          description: Resource created successfully.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
          headers:
            Location:
              schema:
                type: string
              description: Points to the resource endpoint for the newly created resource
```

Just like when describing request bodies, response bodies are described using JSON Schema.

This schema can are found in the `components` > `schemas` section.

```yaml
components:
  schemas:
    Order:
      type: object
      properties:
        id:
          $ref: '#/components/schemas/Id'
        created_at:
          $ref: '#/components/schemas/CreatedAt'
        updated_at:
          $ref: '#/components/schemas/UpdatedAt'
        name:
          type: string
          pattern: "^[^\\s]*$"
          example: 'John'
          description: The first name of the patron that placed the order. Cannot contain spaces.
        table_number:
          $ref: '#/components/schemas/TableNumber'
        dish_ids:
          $ref: '#/components/schemas/DishIds'
        special_requests:
          $ref: '#/components/schemas/SpecialRequests'
        priority:
          $ref: '#/components/schemas/Priority'
        scheduled_at:
          $ref: '#/components/schemas/ScheduledAt'
        status:
          $ref: '#/components/schemas/Status'
```

The response JSON abides by the schema so a `201 Created` status code is returned indicating the resource was successfully created.

```json
{
  "results": [
    {
      "id": "6828cb40a465c20749ad3c8c",
      "created_at": "2025-03-17T06:28:56.480Z",
      "updated_at": "2025-05-16T23:15:52.619Z",
      "name": "Lasagna alla Bolognese",
      "description": "Layers of pasta, beef ragu, and béchamel sauce baked to perfection.",
      "category": "Main Course",
      "preparation_time": 5,
      "price": 899,
      "image_name": "lasagna_alla_bolognese",
      "station": "hot",
      "ingredients": [
        {
          "ingredient_id": "6828cb40a465c20749ad3c48",
          "is_essential": false,
          "_id": "6828cb40a465c20749ad3c8d"
        },
        {
          "ingredient_id": "6828cb40a465c20749ad3c3a",
          "is_essential": true,
          "_id": "6828cb40a465c20749ad3c8e"
        },
        {
          "ingredient_id": "6828cb40a465c20749ad3c2f",
          "is_essential": false,
          "_id": "6828cb40a465c20749ad3c8f"
        },
        {
          "ingredient_id": "6828cb40a465c20749ad3c4e",
          "is_essential": true,
          "_id": "6828cb40a465c20749ad3c90"
        }
      ]
    }
  ],
  "total_results": 1
}
```

### Summary

- POST requests are crucial for creating new resources in APIs.
- They involve managing request bodies, authentication, and validation
  to ensure accurate resource creation.
- Mastery of defining and handling these requests in OpenAPI
  guarantees robust and dependable API interactions.

## Fetching Resources by ID and Path Parameters

In our previous discussion, we focused on collection endpoints, which are primarily GET requests used to retrieve all resources in the system. Now, let's explore how to use GET requests to fetch specific resources.

After creating a resource with a POST request, APIs typically return a unique ID for that resource. You can later retrieve the resource's details by including the ID as a path parameter in a GET request.

<!--

- Collection endpoints (GET) retrieve lists of resources from the system.
- After creating a resource (POST), use its returned unique ID in a GET request to fetch its specific details.

 -->

### Path Parameters

Path parameters are variables in the URL path that allow you to specify which resource to work with.

They enable dynamic insertion of values into the URL and are typically represented with placeholders. For instance, in the URL structure:

```shell
curl -X GET '{GH-CODESPACES-SERVER-URL}dishes/{id}'
```

<!--
curl -X GET 'https://animated-system-5vwg7649p6fx5q-80.app.github.dev/dishes/{id}'
 -->

`{id}` serves as a placeholder for the unique identifier of the product you want to retrieve.

When you make a GET request to get a specific product, the path parameter `{id}` is replaced with the actual ID of the product in the URL. For example:

```bash
curl -X GET '{GH-CODESPACES-SERVER-URL}dishes/683239106603d0ec6f82c57b'
```

<!--
curl -X GET 'https://animated-system-5vwg76449p6fx5q-80.app.github.dev/dishes/683239106603d0ec6f82c57b'
 -->

In this request, `{id}` is substituted with the ID `683239106603d0ec6f82c57b`, resulting in a complete URL to fetch the specific product.

### API Response

The response to a "Get by ID" request will include the details of the retrieved resource, usually in JSON format and a `200 OK` status code.

The response provides detailed information about the product identified by the provided `id`:

```shell
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "6828cb40a465c20749ad3c8c",
  "created_at": "2025-03-17T06:28:56.480Z",
  "updated_at": "2025-05-16T23:15:52.619Z",
  "name": "Lasagna alla Bolognese",
  "description": "Layers of pasta, beef ragu, and béchamel sauce baked to perfection.",
  "category": "Main Course",
  "preparation_time": 5,
  "price": 899,
  "image_name": "lasagna_alla_bolognese",
  "station": "hot",
  "ingredients": [
    {
      "ingredient_id": "6828cb40a465c20749ad3c48",
      "is_essential": false,
      "_id": "6828cb40a465c20749ad3c8d"
    },
    {
      "ingredient_id": "6828cb40a465c20749ad3c3a",
      "is_essential": true,
      "_id": "6828cb40a465c20749ad3c8e"
    },
    {
      "ingredient_id": "6828cb40a465c20749ad3c2f",
      "is_essential": false,
      "_id": "6828cb40a465c20749ad3c8f"
    },
    {
      "ingredient_id": "6828cb40a465c20749ad3c4e",
      "is_essential": true,
      "_id": "6828cb40a465c20749ad3c90"
    }
  ]
}
```

### Common Response Status Codes

- **200 OK**: The request was successful, and the requested resource was found and returned.
- **404 Not Found**: The requested resource could not be found.

Here is an example of a response when the resource cannot be found (`404 Not Found` status code):

```shell
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "title": "Resource not found",
  "detail": "Dish not found."
}
```

### Summary

- GET requests are used to fetch individual resources.
- Path parameters are employed for identifying the resources.
- GET requests do not require a request body and provide detailed resource data in the response.

## Updating a Resource

The PUT method is an HTTP request method used to update or replace an existing resource on the server. It is commonly employed in CRUD (Create, Read, Update, Delete) operations in RESTful APIs.

When using PUT requests, clients send data to the server to update the state of a resource, typically identified by a unique identifier in the request URL.

**Example Use Cases**:

- Updating a user's profile information.
- Modifying the details of an appointment.
- Changing the status of a task.

### Security

PUT requests, like POST requests, may be considered sensitive and often require authentication before updating a resource.

### Path Structure and Parameters

PUT requests follow a path structure that includes the resource type and a placeholder for the resource ID:

In this example, `{id}` represents the unique identifier of the resource to be updated. When making the request, you replace `{id}` with the actual ID of the resource in the URL.

```shell
curl -X PUT '{GH-CODESPACES-SERVER-URL}ingredients/683236095cc1ff56bace6e77' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer **********' \
-d '{
  "name": "Carrot",
  "in_stock_qty": 0,
  "price": 999
}'
```

<!--
curl -X PUT 'https://animated-system-5vwg76449p6fx5q-80.app.github.dev/ingredients/683236095cc1ff56bace6e77' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer ddab667c-0374-4262-893d-02f93f1a89dd' \
-d '{
  "name": "Carrot",
  "in_stock_qty": 5,
  "price": 999
}'
 -->

### Request Bodies

Request bodies, like those in POST requests, are described using JSON Schema. Typically, they reference schemas defined in the `components` > `schemas` section of an OpenAPI specification.

### API Responses

A typical response for a successful PUT request is a `200 OK` status code, indicating that the resource has been successfully updated.

```shell
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "683236095cc1ff56bace6e77",
  "created_at": "2025-05-24T21:11:37.123Z",
  "updated_at": "2025-05-24T21:32:51.068Z",
  "name": "Carrot",
  "in_stock_qty": 5,
  "price": 999
}
```

### Common Response Status Codes

- `200 OK`: The request was successful, and the resource was updated and returned.
- `404 Not Found`: The requested resource was not found.
- `401 Unauthorized`: Authentication is required, or the provided credentials are invalid.

### Summary

- PUT requests are essential for updating existing resources.
- They use path parameters to identify the resource.
- The request body contains new data for the resource.
- Common status codes include `200 OK` for successful updates and `404 Not Found` for when a resource is not found.

## Deleting a Resource

DELETE requests are HTTP methods used to request the removal of a resource on the server. They are part of the CRUD (Create, Read, Update, Delete) operations in RESTful APIs. With DELETE requests, clients send a request to the server to delete a specific resource identified by its unique identifier in the request URL.

### Example Use Cases

- Deleting a user's account
- Removing an appointment from a schedule
- Deleting a task from a to-do list

### Security

DELETE requests, like POST and PUT requests, are sometimes considered sensitive and require authentication before performing the operation.

### Path Structure and Parameters

DELETE requests use a path structure that contains a placeholder for the resource ID:

```shell
curl -X DELETE '{GH-CODESPACES-SERVER-URL}dishes/{id}'
```

Here, `{id}` represents the unique identifier of the resource to delete.

When making the request, replace the placeholder `{id}` with the actual ID of the resource in the URL.

Example request:

```bash
curl -X GET '{GH-CODESPACES-SERVER-URL}dishes/6828cb40a465c20749ad3c58'
```

### API Responses

A typical response for a successful DELETE request is a `204 No Content` status code, indicating that the resource has been successfully deleted.

```shell
HTTP/1.1 204 No Content
```

### Common Response Status Codes

- `204 No Content`: The request was successful, and the resource has been deleted.
- `404 Not Found`: The requested resource was not found.
- `401 Unauthorized`: Authentication is required, or the provided credentials are invalid.

## Sub-resources

In RESTful API design, sub-resources represent a way to model
relationships between primary resources and their related entities.

They are secondary resources that are logically nested under primary
resources.

Sub-resources are often used to represent data that is dependent on or
related to a primary resource.

In a URL, sub-resources are typically represented by appending their
path to the primary resource's path, along with the identifier of the
primary resource.

### Sub-resources Design

Consider an API that allows you to manage projects and their associated
tasks.

If you need to retrieve a list of tasks for a specific project, you
could use **query parameters** to filter the resource on tasks:

```bash
/api/projects/{project_id}?fields=tasks
```

Alternatively, the API designers could implement a **sub-resource endpoint**:

```bash
GET /api/projects/{project_id}/tasks
```

Here, `projects` is the primary resource, and `tasks` is the
sub-resource.

Let's create the GET request by replacing the path parameter with the
actual project ID to fetch its tasks:

```bash
curl -X GET "http://example.com/api/projects/12345/tasks"
```

### API Responses

The API responds with the list of tasks associated with the project.

```shell
HTTP/1.1 200 OK
Content-Type: application/json

{
  "results": [
    {
      "id": "task123",
      "title": "Update Website Layout",
      "description": "Revamp the layout of the website.",
      "due_date": "2024-06-30"
    },
    {
      "id": "task456",
      "title": "Implement Responsive Design",
      "description": "Make the website responsive.",
      "due_date": "2024-07-15"
    }
  ]
}
```

### Sub-resources Definitions

When designing an API with sub-resources, you typically define endpoints
that include the primary resource's identifier in the path, followed by
the sub-resource path.

```yaml
paths:
  /api/projects/{project_id}/tasks:
    get:
      summary: Get tasks for a specific project
      parameters:
        - in: path
          name: project_id
          required: true
          schema:
            type: string
          description: The ID of the project to get tasks for
      responses:
        200:
          description: Successfully retrieved the tasks
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Task'
        404:
          description: Project not found
```

### Summary

- Sub-resources help organize and retrieve related data efficiently.
- Clear hierarchical URL structures make relationships between
  resources explicit.
- They allow for focused data retrieval.
- Not all APIs use them, some APIs use query parameters or other
  mechanisms instead.
