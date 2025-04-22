# Session #2: Teacher aid

The following is a teaching aid for the instructor for performing demonstrations during live-virtual training calls.

## JSON

JSON Editor:

- [https://jsoneditoronline.org/](https://jsoneditoronline.org/)

### JSON Objects

A JSON object is a collection of key/value pairs enclosed in curly braces `{}`.

```json
{
  "key": "value"
}
```

Each key is a string and should be enclosed in double quotes. Values can be strings, numbers, objects, arrays, booleans (`true`/`false`), or `null`.

Let's create a object that represents a student.

```json
{
  "name": "John Doe",
  "age": 30
}
```

### JSON Arrays

Let's say there are multiple students. To represent a list of students, we would use a JSON array:

```json
{
  "students": [
    {
      "name": "John Doe",
      "age": 30
    },
    {
      "name": "Jane Doe",
      "age": 25
    }
  ]
}
```

A JSON array is an ordered list of values enclosed in square brackets `[]`. Values can be of any type: strings, numbers, objects, arrays, booleans, or `null`.

### Nesting JSON Objects and Arrays

Let's say there's more we want to describe about our students, for example, their address. An address is comprised of various related prooperties, like street, city, zip code, etc, so to do this we need to nest those properties.

```json
{
  "students": [
    {
      "name": "John Doe",
      "age": 30,
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
      }
    },
    {
      "name": "Jane Doe",
      "age": 25,
      "address": {
        "street": "256 West St",
        "city": "Anytown",
        "zipcode": "12345"
      }
    }
  ]
}
```

JSON supports nesting of objects and arrays to represent more complex data structures.

### Code-along

_Switch back to Code-along slide_

"Part 1:
Practice Writing JSON" > "Code-along: Create an Employees
Array"

Answer:

```json
{
  "employees": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "position": "Software Engineer",
      "department": "Development",
      "salary": 75000,
      "address": {
        "street": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": 94105
      }
    }
  ]
}
```

## Swagger UI

### Access Swagger UI

- Open the port serving the `swagger-ui` container to access Swagger UI.

### Understanding the Interface

- Swagger UI renders the API documentation based on an OpenAPI file that exists on a local machine or more commonly on a web server.
- You'll find a link to the `openapi.original.yml` file, allowing you to view the raw JSON data used by Swagger UI. It's rendering that file based on the YAML.
- The OpenAPI file `openapi.original.yml` located in the `api-documentation-course/openapi` folder.

### Interactive Features

- Swagger UI provides interactive features such as the "Try it out" option, enabling users to interactively test API endpoints by modifying parameters and request bodies.
- Depending on the API, you may need to authenticate or authorize requests. The "Authorize" button facilitates token-based authentication, adding tokens to the authorization header.

### Response Handling

- Explore example values and schemas provided for responses, aiding in understanding data structures and constraints defined in the OpenAPI specification.
<!-- - Schemas for reusable components are displayed at the bottom, offering quick access to schemas referenced in the OpenAPI spec. -->

### Demo: Swagger UI "Try-it-out"

1. **Authorize API Requests**

   - Click the "Authorize" button in Swagger UI.
   - Enter the following access token in the **AccessToken** field:

     ```shell
     a1732455-42cf-4d24-a956-84adc847c0ca
     ```

   - Click "Authorize" to apply credentials.

2. **Access the `/ingredients` Endpoint:**

   - Navigate to the POST `/ingredients` endpoint.
   - Click the "Try it out" button to open the request editor.

3. **Create an Ingredient:**

   - Add the following request body to create a new ingredient:

     ```json
     {
       "name": "Celery",
       "in_stock_qty": 50,
       "price": 50
     }
     ```

4. **Execute the Request:**

   - Click "Execute" to send the request.
   - On success, a `201 Created` status will be returned along with the API response body containing the new resource:

     ```json
     {
       "id": "66ed49db38f807b85eba0d09",
       "created_at": "2024-09-20T10:09:31.725Z",
       "updated_at": "2024-09-20T10:09:31.725Z",
       "name": "Celery",
       "in_stock_qty": 50,
       "price": 50
     }
     ```

### Code-along

"Part 3: Hands-on API Testing
with Swagger UI" > "Code-along: Send a JSON payload"

## Postman UI Walkthrough

### Prerequisites:

1. Create and authenticate a user in Postman

### Steps

1. **Open Postman**:

   - The main tab to focus on is the **Collections** tab.
   - After following the README instructions, you should have imported the Postman collection. Let’s review it.

2. **Understanding the Collection**:

   - The collection consists of folders, each corresponding to a different API resource. We’ll go over what resources are later.
   - Inside each folder, you’ll find example API requests, each associated with different actions (methods). These actions include creating, retrieving, updating, and deleting resources, which you’ll see consistently across all resources.

3. **Inspecting a Request**:

   - Let’s start by opening a "Get a list of" request.
   - At the top, you’ll see a **URL bar** which shows the API endpoint.
   - The method here is **GET**, which retrieves a list of resources.
   - The URL will show `{{baseUrl}}/orders`. But what is `baseUrl`?

4. **Understanding `baseUrl`**:

   - As part of the README instructions, you downloaded an environment file along with the Postman collection.
   - Click on the **Environments** tab on the left, then select **Environment Variables**.
   - Here, you’ll see the `baseUrl` variable. This stores the base URL (`http://localhost:80`), which is used throughout the requests.
   - For local development, this points to your machine, but in a production environment, this would be a web-accessible API URL.

5. **Query Parameters**:

   - Moving back to the request, let’s examine the **Params** tab.
   - These are query parameters that modify the results. For example, adding a `sort` parameter sorts the returned data by a specified field.
   - When you add a query parameter, it’s appended to the URL after a `?`, like `?sort=fieldname`.
   - Additionally, you can specify the sort **order** (ascending or descending), e.g., `order=asc`.

6. **Authorization**:
   - Next, let’s explore the **Authorization** tab for this request.
   - For the GET request, no authorization is needed since we’re just retrieving data. However, for requests that modify resources (such as creating or updating), authorization is typically required.

### POST Request Example:

1. **Switching to a POST request**:

   - Let’s now switch to the **POST** request for creating an order.
   - In the **Authorization** tab, you’ll notice that authorization is required, as this request modifies a resource. In this case, we need to provide a **Bearer token**.

2. **Bearer Token**:

   - The Bearer token is stored as an environment variable. Check the **Environments** tab to see the token.
   - The token is a UUID (a unique identifier), which acts like a secret password granting access to certain endpoints.

3. **Request Body**:

   - Now, go to the **Body** tab.
   - This tab contains the **JSON** object representing the order we’re creating. Here, you’ll define the values for the new order.

4. **Sending the Request**:
   - Click **Send**.
   - In the lower pane, you’ll see a **201 Created** status code, indicating success. The response body contains the new resource, including an automatically generated ID and timestamps (`created_at` and `updated_at`).

### Additional Features

1. **Viewing Code Samples**:
   - One last feature to explore is the **Code** tab.
   - Postman provides sample code for different programming languages, which is useful for adding examples to your API documentation.
   - You can copy the code in your preferred language or use **curl**, a common tool for making API requests, which is included by default.
