# Class #7: Offline Exercises

In these exercises, you'll use Swagger Editor to document the primary paths of the Course API. You'll enhance the OpenAPI spec by adding informal descriptions to improve clarity and usability.

## Prerequisites

### GitHub Codespace

1. Go to [https://github.com//codespaces](https://github.com//codespaces) and sign in to GitHub if you are not already logged in.
2. Click the Codespace you created previously to open it.
3. Make the API server public. Refer to [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public) for instructions.
4. Copy the Server URL:
   - Hover over the API Server (Port 80), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using Notepad or another text editor.
5. Start the server by running `npm run start` in a terminal. Refer to [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server) for additional guidance.
6. In a new terminal (click the plus icon on the right), run `npm install` to install the latest version of the API.
7. Go back to the Ports tab. Hover over the row for Port 8800 and click the Globe icon to open Swagger Editor in a new tab in your browser.

### Saving Your Work

Note: Refreshing the page or closing the browser tab may cause changes you made in Swagger Editor to be lost. Although it typically saves the page contents to the cache, your changes may still not appear after refreshing depending on your browser settings or other factors.

If you take a break while completing the lessons or stop for the day, it’s recommended to download the OpenAPI file and then import it into Swagger Editor during your next session.

To do this:

1. In Swagger Editor, click on File and then select "Save as YAML".
   - This will download the file to your computer.
2. When you resume later, you can import the file into Swagger Editor by clicking on **File** > **Import File** and then selecting the file you downloaded previously.

## `...` Placeholders

In Swagger Editor, you will see a `...` placeholder for the value of summaries and descriptions. It is intended that you replace these placeholders with the appropriate content as advised by the questions.

## Part 1: Document the POST `/ingredients` Operation

### Exercise #1: Summarizing an Operation

#### Steps

1. To open the search bar, place your cursor on the left side of the Swagger Editor. Then:
   - For Windows, hit `Ctrl + F`.
   - For Mac, hit `Cmd + F`.
   - This opens the search bar in Swagger Editor.
2. Underneath the search field, click the `Aa` button to enable case sensitivity.
3. **Locate the Path**: In the Swagger Editor search bar, **add a space** then type the following:

   ```yaml
   /ingredients:
   ```

4. Hit ENTER. This should direct you to the `/ingredients` path.
5. **Create a Summary**: Write a summary for the operation. Refer to the **Summarizing Operations** section in the [API Reference Best Practices](https://api-course-docs.redocly.app/references/api-reference-bps) file and apply the relevant best practices.
   - **Tip**: If you are unsure about the purpose of the operation:
     - Utilize the "Try it out" feature to experiment with sending requests and observe the responses. For a refresher on this feature, please review [Development Environment Setup](https://api-course-docs.redocly.app/dev-setup#test-swagger-ui-interactivity) guide, replacing instances of `Port 5500` with `Port 8800`.
     - Refer back to previous exercises that involved sending requests to this operation for specific goals.
   - **Hint**: The summary is closely related to the HTTP method (POST, in this case), which has a specific purpose.

### Exercise #2: Describing an Operation

#### Steps

1. **Provide an Operation Description**: Add an operation description **in the `description` field below the `summary`** you completed previously.
   - In the right-side panel of Swagger Editor, locate the **POST** `/ingredients` request and view the **Request body** fields and **Responses** fields to help understand the purpose and important fields of the operation.
   - Refer to the **Documenting Operations** best practices to ensure your description meets the necessary guidelines. Ask yourself:
     - What does this operation do?
     - How can the `id` in the response be used? (Remember, there is another operation where you will need to provide the ID of at least one ingredient.)
     - Review the **Request body** > **Example Value** to identify key request fields.
     - Review the **Responses** > **Code 201** > **Example Value** to identify key response fields.
   - **Hint**: The `in_stock_qty` field in the request body is used by the API client to set the initial quantity of the ingredient. This field helps track if the ingredient has a positive quantity.

### Exercise #3: Documenting Fields

#### Steps

1. **Document the Request Body Fields**: Start with the request body.

   - Search for:

     ```yaml
     $ref: '#/components/requestBodies/CreateIngredientRequest'
     ```

     Notice how the `requestBody` references a schema.

   - Next, locate the schema for the request body fields by searching for:

     ```yaml
     CreateIngredientRequest:
     ```

   - Using the best practices for describing fields in the _Documenting Fields_ section of the API Best Practices, add descriptions of the fields.
   - Notice how `in_stock_qty` and `price` reference schemas. You'll need to search for those schemas and add descriptions to those fields:
     - `InStockQty:`
     - `Price:`

2. **Document the Response Fields**: Next, focus on the response fields.

   1. **Return to the POST /ingredients endpoint**: In the Swagger Editor, open the search feature in the left-side panel (if it is not already open). Add a space and then type the following:

      ```yaml
      /ingredients:
      ```

   2. Hit ENTER. This should direct you to the `/ingredients` path.

   3. Locate the `responses` object and find the schema for the `201` response, which will be:

   ```yaml
   $ref: '#/components/schemas/Ingredient'
   ```

   4. Search for `Ingredient:` schema.
   5. You'll notice several fields reference schemas; search for and document each schema. Since we already documented `InStockQty` and `Price` schemas, they do not need to be documented again

   - **Hint**: Refer to the _Data Type Considerations_ section in the API Reference Best Practices for guidance.

## Part 2: Document Remaining Endpoints

Using the same methods described for the other exercises, document all API endpoints:

- Orders
- Dishes
- Ingredients
- Users
- Auth

Ensure that your documentation is correctly rendered in the right panel of the Swagger editor, with no errors displayed there.
