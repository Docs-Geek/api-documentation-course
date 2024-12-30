# Session #5: Offline Exercises

In these exercises, you'll use Swagger Editor to document the primary paths of the Course API. You'll enhance the OpenAPI spec by adding informal descriptions to improve clarity and usability.

## Prerequisites

### Local Setup

These steps are only for users who completed the local setup. If you used the GitPod setup, skip this section and go directly to the "GitPod Setup" section. If you're unsure about "GitPod," you likely set up the project locally, so you can proceed with the instructions here.

#### Steps

1. Ensure Docker Desktop is open and the `api-documentation-course` container is running. If it is not, click the "Play" button on the container.
2. In Docker Desktop, locate the `swagger-editor` container, most likely called `swagger-editor-1`. Click its blue link in the Port(s) column to open it in the browser.

### GitPod Setup

These steps apply only if you completed the GitPod setup. If you’re unfamiliar with "GitPod," you likely set up the project locally. In that case, you can skip these prerequisite steps.

#### Prerequisites

These instructions assume you've completed the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace) (if you’ve already completed the setup, there’s no need to do it again).

#### Copy the OpenAPI File Contents in the GitPod Workspace

1. Go to your [GitPod Workspaces](https://gitpod.io/workspaces) page and open the workspace you created as part of the GitPod setup.
2. Click the workspace link to start it. If you do not see a workspace link, you likely have not completed the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace).
3. In the workspace, open the `openapi` folder, then click the `openapi.yml` file.
4. In the `openapi.yml` file, press `Ctrl` + `A` (or `Cmd` + `A` on Mac) to select all the content, then press `Ctrl` + `C` (or `Cmd` + `C` on Mac) to copy the entire file content.

##### Paste the OpenAPI File Contents into Swagger Editor

1. Open the [Swagger Editor](https://editor.swagger.io/).
2. From the top menu bar, click "File" and select "Clear editor" to remove all code from the editor (leaving a blank editor).
3. Paste the OpenAPI file contents you copied from the GitPod workspace into Swagger Editor.

## Part 1: Document the POST `/ingredients` Operation

### Exercise #1: Summarizing an Operation

#### Steps

1. For Windows, hit `Ctrl + F`. For Mac, hit `Cmd + F`. This opens the search bar in Swagger Editor.
2. **Locate the Path**: In the Swagger Editor search bar, add a space then type:
   ```shell
   /ingredients:
   ```
3. Hit ENTER. This will direct you to the `/ingredients` path.
4. **Create a Summary**: Write a summary for the operation. Refer to the **Summarizing Operations** section in the `api-ref-best-practices_session5` file and apply the relevant best practices.
   - **Tip**: If you are unsure about the purpose of the operation, utilize the "Try it out" feature to experiment with sending requests and observe the responses. You can also refer back to previous exercises that involved sending requests to this operation for specific goals.
   - **Hint**: The summary is closely related to the HTTP method (POST, in this case), which has a specific purpose.

### Exercise #2: Describing an Operation

#### Steps

1. **Provide an Operation Description**: Add an operation description **in the description field below the `summary`** you completed previously.
   - In the right-side panel of Swagger Editor, view the **Request body** fields and `Responses` fields to help understand the purpose and important fields of the operation.
   - Refer to the **Documenting Operations** best practices to ensure your description meets the necessary guidelines.
   - **Questions to Address**:
     - What does this operation do?
     - How can the `id` in the response be used? (Remember, there is another operation where you will need to provide the ID of at least one ingredient.)
     - Review the example request body to identify key fields.
   - **Hint**: The `in_stock_qty` field in the request body is used by the API client to set the initial quantity of the ingredient. This field helps track if the ingredient has a positive quantity.

### Exercise #3: Documenting Fields

#### Steps

1. **Document the Request Body Fields**: Start with the request body.

   - Search for:
     ```shell
     $ref: '#/components/requestBodies/CreateIngredientRequest'
     ```
   - Locate the schema containing the request body fields by searching for:
     ```shell
     CreateIngredientRequest:
     ```
   - Using the best practices for describing fields in the _Documenting Fields_ section of the `api-ref-best-practices_session5` file, add descriptions of the fields.
   - Search for `InStockQty:` and `Price:` and add descriptions to those fields.

2. **Document the Response Fields**: Next, focus on the response fields.
   - Since `$ref` was used, some of the fields documented in the request (specifically `in_stock_qty` and `price`) do not need to be documented again in the response.
   - Document the `name` field by searching for:
     ```shell
     /ingredients:
     ```
     Locate the `responses` object and find the schema for the `201` response:
     ```shell
     $ref: '#/components/schemas/Ingredient'
     ```
   - Search for the following fields and add descriptions:
     - `Id`, `CreatedAt`, and `UpdatedAt`.
   - **Hint**: Refer to the _Data Type Considerations_ section in the `api-ref-best-practices_session5` file for guidance.
