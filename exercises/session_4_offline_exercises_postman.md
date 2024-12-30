# Session #4: Offline exercises - Postman

## Prerequisites

### Local Setup

#### Prerequisites

These steps are only for users who completed the local setup. If you used the GitPod setup, skip this section and go directly to the "GitPod Setup" section. If you're unsure about "GitPod," you likely set up the project locally, so you can proceed with the instructions here.

#### Steps

- Open Docker Desktop and start the `api-documentation-course` container. Click "Play" if it's not running.
- Open Visual Studio Code and go to the top menu and select **Terminal** > **New Terminal**.
- Alternatively, use the keyboard shortcut:
  - Windows: `Ctrl + (backtick)`
  - macOS: `Command (⌘) + (backtick)`

### GitPod setup

These steps apply only if you completed the GitPod setup. If you’re unfamiliar with "GitPod," you likely set up the project locally. In that case, you can skip these prerequisite steps.

#### Prerequisites

These instructions assume you've completed the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace) (if you’ve already completed the setup, there’s no need to do it again).

#### Steps

- Go to your [GitPod Workspaces](https://gitpod.io/workspaces) page and open the workspace you created as part of the GitPod setup.
- Click the workspace link to start it. If you do not see a workspace link, you likely have not completed the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace).

## Opening Postman (applies to both setups)

- Launch the Postman application on your computer.
- In the **Collections** tab, expand the collection named "Point of Service (POS) API - Original."
- In the top-right corner, check the drop-down for **Environment Variables**. If it shows "No Environment," select **Environment Variables**; otherwise, you're all set.

## Code-along #1: Applying Selection Filters

### Steps

1. Expand the "Dishes" folder.
2. Open the request titled "Get a list of dishes".
3. In the "Params" tab, select the "filter" checkbox to add it as a query parameter. Click "Send".
4. In the response window, answer the following:
   - What is the meaning of the first filter before the `|` symbol?
   - What is the meaning of the second filter after the `|` symbol?

## Code-along #2: Applying Pagination Filters

### Steps

1. With the "Get a list of dishes" request still open, go to the "Params" tab.
2. Select the "limit" checkbox to add it as a query parameter. Click "Send".
3. Take note of the "name" of the first record in the response.
4. Select the "offset" checkbox and set the value to `10`. Click "Send".
5. In the response window, answer the following:
   - What was the "name" of the first record _after the initial request_?
   - For the second request, applying the "offset" filter, what is the "name" of the new first record?

## Code-along #3: Retrieve by ID

### Steps

1. Expand the "Ingredients" folder.
2. Open the request titled "Get a list of ingredients" and click "Send".
3. In the response, copy the `id` of the first ingredient in the list.
4. Open the request titled "Get an ingredient's details".
5. In the "Params" tab, under "Path Variables", replace the value of `{{ingredientId}}` with the `id` you copied earlier.
6. Use your knowledge of filters to return only the "name" and "price" fields in the response.
7. In the response window, paste the full URL you used (located to the left of the "Send" button) to verify your query parameters were applied correctly.

## Postrequisites

### GitPod Setup

These steps apply only if you completed the GitPod setup. If you’re unfamiliar with "GitPod," you likely set up the project locally. In that case, you can skip these prerequisite steps.

#### Steps

- Follow the instructions for [Stopping the GitPod workspace](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-user-guide.md#important-stopping-the-workspace).
