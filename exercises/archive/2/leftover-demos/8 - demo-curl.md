## Part 4: Practice Composing cURL Requests

### Exercise: Create an Order Using cURL

#### Steps

1. Before creating an order, we first need to retrieve a list of available dishes that can be added to the order:

   ```bash
   curl -X GET 'http://localhost:80/dishes' \
   -H 'Accept: application/json'
   ```

2. Once you have the list, copy the `id`s from two records in the `results` array.

3. Next, send the following cURL request, replacing `{{INSERT ID}}` with the two copied IDs in the `dish_ids` array:

   ```bash
   curl -X POST 'http://localhost:80/orders' \
   -H 'Content-Type: application/json' \
   -H 'Accept: application/json' \
   -H 'Authorization: Bearer a1732455-42cf-4d24-a956-84adc847c0ca' \
   -d '{
     "dish_ids": [
       "{{INSERT ID}}",
       "{{INSERT ID}}"
     ],
     "given_name": "Besss",
     "table_number": 18
   }'
   ```

4. If successful, this request should return a `201 Created` status code, along with a response body containing the details of the new order.
