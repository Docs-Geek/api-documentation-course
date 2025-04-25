# Session #3: In-Class Exercises

### Prerequisites

1. Open Postman on your computer.
2. In the top-right corner, click on "Environment Variables" and ensure "Environment Variables" is selected.
3. Expand the "Point of Service (POS) API - Original" collection.

### Exercise #1: Retrieve a List of Resources

1. Expand the "Orders" section.
2. Open the request titled "Get a list of orders" and click "Send".
3. In the response window, provide the following details:
   - The request method
   - The response status code
   - The total number of results (found in the `total_results` field)

### Exercise #2: Sorting and Ordering with Query Parameters

1. With the "Get a list of orders" request still open, go to the "Params" tab.
2. Select the checkboxes for "Sort" and "Order" to add them as query parameters. Click "Send".
3. Note the `priority` value of the first record in the response.
4. Change the "order" parameter to "desc" and click "Send" again.
5. In the response window, answer the following:
   - What was the priority of the first record in the initial request?
   - After changing "order" to "desc", what is the new priority of the first record?
   - What character appears before the query parameters in the URL?
   - What character is used to separate query parameters in the URL?

### Exercise #3: Using Projection Filters

1. With the "Get a list of orders" request still open, return to the "Params" tab.
2. Deselect the checkboxes for "sort" and "order" to remove them from the URL.
3. Select the "fields" checkbox to add it as a query parameter.
4. In the "Value" column for "fields", add `name` to the end of the project filter: `|name`.
5. Click "Send".
6. In the response window, answer the following:
   - What character separates fields in a projection filter?
   - What fields are returned per record in the response (not including `id`)?
