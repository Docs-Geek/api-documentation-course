Same as their exercise part 3.

## Part 3: Hands-on API Testing with Swagger UI

### Exercise: Send a JSON Payload

#### Prerequisites

Ensure Docker Desktop is running along with the necessary Docker containers.

#### Steps

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
   - On success, a `200 OK` status will be returned along with the API response body containing the new resource:

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
