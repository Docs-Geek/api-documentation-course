# Class #2: In-Class Exercises

## Part 1: Practice Writing JSON

### Create an Employees Array

- Go to [JSON Editor Online](https://jsoneditoronline.org/).
- In the editor, type the following JSON code (by hand rather than copying), as shown below. To indent, hit "Tab" on your keyboard.
- Note that receiving errors as you are typing is normal.

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

- If you are receiving errors and struggling to resolve them, simply copy and paste the above code snippet into the editor.

---

---

## Part 2: Hands-on API Testing with Swagger UI

### Send a JSON Payload

**1. Authorize API Requests**

- Click the "Authorize" button in Swagger UI.
- Enter the following access token in the **AccessToken** field:

```shell
a1732455-42cf-4d24-a956-84adc847c0ca
```

- Click "Authorize" to apply credentials.

**2. Create an Ingredient**

- Navigate to the POST `/ingredients` endpoint.
- Click the "Try it out" button to open the request editor.
- Delete any existing JSON in the text field to make it empty.
- Type the following JSON code into the field:

```json
{
  "name": "Tomato",
  "in_stock_qty": 100,
  "price": "55"
}
```

- Click "Execute" to send the request.

**3. Create Veggie Burger ingredients**

Create the following ingredients using the POST `/ingredients` endpoint, interpreting the tabular data as JSON request bodies:

<table border="1" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <th><code>name</code></th>
      <th><code>in_stock_qty</code></th>
      <th><code>price</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bun</td>
      <td>300</td>
      <td>199</td>
    </tr>
    <tr>
      <td>Veggie Patty</td>
      <td>43</td>
      <td>499</td>
    </tr>
    <tr>
      <td>Lettuce</td>
      <td>400</td>
      <td>99</td>
    </tr>
    <tr>
      <td>Onion</td>
      <td>120</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

## Stop GitHub Codespace

To stop the codespace:

1. Go to [https://github.com//codespaces](https://github.com//codespaces).
2. On the right-side, left-click the three dots next to the codespace name.
3. Select Stop Codespace.
   - A banner will display at the top of the screen indicating that the codespace has been stopped.
