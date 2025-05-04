# Development Environment Setup Guide

This guide will show you how to configure a development environment using GitHub Codespaces to create a sandbox for completing the course exercises and experimenting with the API.

{% admonition type="info" name="Viewing videos in full-screen mode" %}
Full screen mode for videos is not supported within this article. To view a video in full screen mode, click "Watch on YouTube".
{% /admonition %}

## Create a GitHub Account

1. Go to [https://github.com/](https://github.com/) and create an account using a personal email address. You may skip this step if you already have a personal GitHub account.
2. You will receive an email from GitHub to verify your email address. Open that email and click the link to verify.
3. After verifying your email, sign in to your GitHub account using the details you provided during account creation.

## Open the GitHub Codespace

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/A0x-HWaKFkQ?si=4TBv-x6vyHquoqaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To open a GitHub Codespace:_**

1. Navigate to:
   - [https://github.com//Docs-Geek/api-documentation-course](https://github.com//Docs-Geek/api-documentation-course).
2. Click the green **Code** button.
3. Click the **Codespaces** tab.
4. Click the plus (**+**) icon to create a new codespace.

<br/>

Wait for the Codespace to load. This may take 1 to 3 minutes—grab a coffee! You will know the Codespace is set up when you see the following icon:

<br/>

{% img src="assets/images/ports-4.png" alt="Ports 4" width="100%" /%}

<br/>

<br/>

You can dismiss all popups, including:

<br/>

{% img src="assets/images/dismiss-popup-2.png" alt="Ports 4" width="300" /%}

<br/>

## Make the API Server Port Public

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/4kHj2zpNQGk?si=e4fus7Q4IVBPbVxX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To make the API server port public_**:

1. In the bottom panel, click the **Ports** tab.
2. On the **Port** `80` row, right-click the word **Private** in the **Visibility** column.
3. In the popup, hover over **Port Visibility** and select **Public**.

<br/>

## Run the Setup Script

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/79HZErzZQVM?si=6Dl68Ct1-MQgrnx6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To run the setup script:_**:

1. Click the **Terminal** tab in the bottom panel.
2. Click inside the terminal and type:
   ```bash
   ./setup.sh
   ```
3. Hit ENTER on your keyboard to run the script.
   - A "Database seeded successfully" message indicates the setup is complete.

<br/>

## Start the API Server

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/XFEsFyK8lns?si=PTMpV2a5RIizg-O_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To start the API server_**:

1. From the **Terminal** tab, type:
   ```bash
   npm run start
   ```
2. Hit ENTER on your keyboard to run the script and wait for a moment.
   - The final line displayed should say, "Connected to MongoDB," indicating that the server has started successfully.

<br/>

## Verify the API server is running

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/QgeuRNAx3wA?si=npjGISiZhdWde_oD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To verify the API server is running:_**

1. Open the API server in a new tab:
   - **For Windows**, hold down the **CTRL** key and left-click the link displayed in the terminal: `(http://localhost:80)`. Skip to Step 2.
   - **For Mac**, hold down the **CMD** key and left-click the link displayed in the terminal: `(http://localhost:80)`.
2. A new browser tab opens. On this page, check if the following text displays:

   ```json
   {"message":"not found","errors":[{"path":"/","message":"not found"}]}}
   ```

<br/>

If the text above is displayed, then the API server is currently running.

<br/>

## Install the React Admin Panel

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/iq_RN0O-mQE?si=yoOQhcTQlL3BrIZl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To install the React Admin Panel_**:

1. To open a new terminal, click the downward caret next to the plus (**+**) icon and select **Bash** from the drop-down.
2. Click inside the terminal, and type the following command to run the admin panel:
   ```bash
   ./scripts/run-admin.sh
   ```
3. Hit ENTER on your keyboard to execute the script.
   - When you see links, that means the admin panel was built successfully.

## Open the React Admin Panel

<br/>

1. In the terminal where the admin panel was run, click the `http://localhost:5173/` link to open the React admin panel in a new browser tab.
2. In the browser, **hit the refresh button twice**.
   - The React admin panel login screen will display.

<br/>

## Login to the Admin Panel

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/0f96Osg73sY?si=6IrYeX9vL0VVHN5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To log in to the React Admin Panel_**:

1. Log in with the following credentials:
   - Username: `apiuser01`
   - Password: `Passw0rd123!`
2. Click the **Orders** tab and wait a moment.
   - Data should populate in the table. If it does, the admin panel is successfully connected to the database.

<br/>

## Test Curl Commands

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/iydyQEzvx20?si=y2nm3ur6_yLPA-YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To test Curl Commands_**:

1. Open a new terminal by clicking the downward caret next to the plus (**+**) icon and select **Bash** from the drop-down.
2. Right-click the word **bash**, select **Rename**, and type "Curl".
3. Run the following command to make an API request using Curl:

   ```bash
   curl -i -X GET "https://api.chucknorris.io/jokes/random"
   ```

   The output will look something like this (the joke will vary):

   ```json
   {"categories":[],"created_at":"2020-01-05 13:42:26.194739","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"ZYuYuFQVSfamBUYfzFADMQ","updated_at":"2020-01-05 13:42:26.194739","url":"https://api.chucknorris.io/jokes/ZYuYuFQVSfamBUYfzFADMQ","value":"Chuck Norris has more subscribers than Pewdiepie."}%
   ```

If the data returned to the terminal has the same fields as mentioned above (the actual data may differ), it confirms that you can send API requests using curl in the terminal.

<br/>

## Test Swagger UI Interactivity

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/mVnaJ4sSpPQ?si=6w-QmbBsMCcyH5zF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To test Swagger UI interactivity_**:

1. Return to the GitHub Codespace.
2. Go to the **Ports** tab (if not already there).
3. Hover over the API Server (**Port** `80`), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using NotePad or another text editor.
4. For **Port** `5500`, click the **Forward Address** link to open Swagger UI in a new browser tab.
5. Place your cursor in the `gh-codespaces-server-url` form field and paste the local address you copied previously. Remove the slash at the end.
6. Verify the **Computed URL** only has one slash at the end.
7. Under **Orders**, expand **GET /orders**.
8. Click the **Try it out** button.
9. Scroll down and click the blue **Execute** button.
   - If a "Code 200" is returned in the **Server response** section, then the request was successful, and Swagger UI is functioning properly.

<br/>

## Import Postman Collections into Postman

### Prerequisites

- In the previous section, you should have pasted the local address of the API server into a text file. You must copy the local address from that file for this section.

### 1. Download Postman files from GitHub

- Go to [postman/Environment Variables.postman_environment.json](https://github.com/Docs-Geek/api-documentation-course/blob/77aac6b81ce9ae68bf5621869f714baad6e814f8/postman/Environment%20Variables.postman_environment.json)

- On the page's right side, click the downward arrow button to download the file.

   <br/>

  For example:

   <br/>

  {% img src="assets/images/download-raw-file-gh.gif" width="100%" /%}

   <br/>

- Go to [postman/Point of Service (POS) API.postman_collection.json](<https://github.com/Docs-Geek/api-documentation-course/blob/77aac6b81ce9ae68bf5621869f714baad6e814f8/postman/Point%20of%20Service%20(POS)%20API.postman_collection.json>)

- On the page's right side, click the downward arrow button to download the file.

  The two files are now downloaded to your **Downloads** folder.

### 2. Launch Postman

- Download and install [Postman](https://www.postman.com/downloads/).
- Open the Postman application on your computer.

### 3. Create a Postman account:

If this is your first time using Postman, you’ll be prompted to create an account. You can sign up using an email address or continue with a Google or GitHub account. This account will allow you to save your work and sync it across devices.

Note for Windows Users: If you encounter a dialog saying "Windows Defender Firewall has blocked some features of this app," it's safe to click "Allow Access" to ensure Postman can function properly. This is a standard security prompt and won't harm your system.

### 4. Go to the Import Menu

Click on the **Import** button located in the top-left corner of the Postman app or use the shortcut `Ctrl + O` (Windows/Linux) or `Cmd + O` (Mac).

### 5. Import Files

- In the **Import** dialog, you’ll see options to
- Where it says, **Drop Anywhere to Import**, drag and drop the 2 Postman files downloaded earlier from your **Downloads** folder, or where you downloaded the Postman files previously.
- Postman should display two files for import. Click **Import** to import all files.

### 6. Select the Environment

- In the top-right corner of the Postman app, click **No Environment**.
- Select **Environment Variables**.

---

### 7. Set `baseUrl` in Environment Variables

Follow the steps shown in the video below.

<br/>

{% img src="assets/images/paste-server-url.gif" width="100%" /%}

<br/>

For written instructions:

- Click the **Environments** tab.
- Select **Environment Variables**.
- Paste the server URL you copied earlier into both the **Initial Value** and **Current Value** fields for the `baseUrl` variable.
- Save the file.

### 8. Test the `baseUrl` Configuration

Verify the setup by following the steps in the video below.

<br/>

{% img src="assets/images/test-postman.gif" width="100%" /%}

<br/>

For written instructions:

- Click the **Collections** tab.
- Expand the **Point of Service (POS) API** collection.
- Expand the **Dishes** folder.
- Open the **Get a List of Dishes** request.
- Click the blue **Send** button.

If the response returns successfully, your Postman configuration is correct.

<br/>

## Stop the Codespace

When using GitHub Codespaces with a free account, you are allocated a specific number of hours. It's important to [stop your Codespace](https://github.com//codespaces) when you finish your exercises, as leaving it running will consume the hours remaining on your free account. The number of hours provided with the free account should be more than enough to complete all the course exercises and allow for additional experimentation.

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/fo4JN1T9oJU?si=zRr2c0ix8xiBFBMG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

<br/>

**_To stop the codespace_**:

1. Go to [https://github.com//codespaces](https://github.com//codespaces).
2. On the right-side, left-click the three dots next to the codespace name.
3. Select **Stop Codespace**.
   - A banner will display at the top of the screen indicating that the codespace has been stopped.

<br/>

## Wrapping Up

<br/>

Congratulations! You have now set up your development environment to complete your exercises, test, and document the course API.
