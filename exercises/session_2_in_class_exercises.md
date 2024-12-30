# Session #2: In-class Exercises

## Part 1: Practice Writing JSON

### Code-along: Create an Employees Array

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

## Part 2: Practice Writing YAML

### Code-along: Describe "Inception" in YAML format

- Go to the [YAML to JSON converter](https://jsonformatter.org/yaml-to-json#).
- Write the following YAML into the left-side editor by hand:
  - To indent, hit the "SPACE" key. This editor does not support indentation using "TAB."

```yaml
title: Inception
director: Christopher Nolan
releaseYear: 2010
genres:
  - Action
  - Sci-Fi
  - Thriller
ratings:
  IMDB: 8.8
  Rotten Tomatoes: '87%'
  Metacritic: 74
cast:
  - name: Leonardo DiCaprio
    role: Cobb
  - name: Joseph Gordon-Levitt
    role: Arthur
  - name: Elliot Page
    role: Ariadne
```

- Click the "YAML to JSON" button:
  - If successful, the YAML you entered in the left panel is converted to JSON in the right panel, demonstrating YAML's compatibility with JSON.
  - If the YAML is invalid, you'll receive an error message. If needed, copy and paste the YAML example above into the editor.

---

## Part 3: Hands-on API Testing with Swagger UI

### Code-along: Send a JSON Payload

#### Prerequisites

**Local setup (default):**

- Ensure Docker Desktop is open and the `api-documentation-course` container is running. If it is not, click the "Play" button on the container.
- In Docker Desktop, locate the `swagger-ui` container, most likely called `swagger-ui-1`. Click its blue link in the "Port(s)" column to open it in the browser.

**GitPod setup:**

- Go to your [GitPod Workspaces](https://gitpod.io/workspaces) page and open the workspace you created during setup.
- Follow the [Open Swagger UI guide](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-user-guide.md#open-swagger-ui) for instructions.

---

### Steps

**1. Authorize API Requests**

- Click the "Authorize" button in Swagger UI.
- Enter the following access token in the **AccessToken** field:

```shell
a1732455-42cf-4d24-a956-84adc847c0ca
```

- Click "Authorize" to apply credentials.

**2. Access the `/ingredients` Endpoint**

- Navigate to the POST `/ingredients` endpoint.
- Click the "Try it out" button to open the request editor.

**3. Create an Ingredient**

- Delete any existing JSON in the text field to make it empty.
- Type the following JSON code into the field:

```json
{
  "name": "Tomato",
  "quantity": 100,
  "unit": "grams"
}
```

- Click "Execute" to send the request.
