# Development Environment Setup Guide

## Create a GitHub Account

1. Go to [https://github.com/](https://github.com/) and create an account using a personal email address.
2. You will receive an email from GitHub to verify your email address. Open that email and click the link to verify.
3. After verifying your email, sign in to your GitHub account using the details you provided during account creation.

## Open the GitHub Codespace

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/A0x-HWaKFkQ?si=4TBv-x6vyHquoqaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

#### To open a GitHub Codespace

1. Navigate to:
   - [https://github.com//Docs-Geek/api-documentation-course](https://github.com//Docs-Geek/api-documentation-course).
2. Click the green **Code** button.
3. Click the **Codespaces** tab and the plus icon to create a new codespace.

<br/>

Wait for the Codespace to load. This may take 1 to 3 minutes—grab a coffee! You will know the Codespace is set up when you see the following icon:

<br/>

{% img src="assets/images/ports-4.png" alt="Ports 4" width="300" height="200" /%}

<br/>

You can dismiss all popups, including:

<br/>

{% img src="assets/images/dismiss-popup-1.png" alt="Ports 4" width="300" height="75" /%}

<br/>

{% img src="assets/images/dismiss-popup-2.png" alt="Ports 4" width="300" height="200" /%}

<br/>

## Make the API Server Port Public

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/4kHj2zpNQGk?si=e4fus7Q4IVBPbVxX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**_To make the API server port public_**:

1. In the bottom panel, click the **Ports** tab.

<br/>

## Run the Setup Script

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/iq_RN0O-mQE?si=yoOQhcTQlL3BrIZl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**_To run the setup script:_**:

1. Click the **Terminal** tab.
2. Place your cursor in the terminal and type:
   ```bash
   ./setup.sh
   ```
3. Hit **Enter** to run the script. A "Database seeded successfully" message indicates the setup is complete.

## Start the API Server

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/XFEsFyK8lns?si=PTMpV2a5RIizg-O_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**_To start the API server_**:

1. In the terminal tab, type:
   ```bash
   npm run start
   ```
2. Hit **Enter** to run the script. "Connected to MongoDB" indicates that the server has started successfully.

## Verify the API server is running

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/QgeuRNAx3wA?si=npjGISiZhdWde_oD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

### _To verify the API server is running_:

<br/>

## Install the React Admin Panel

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/WxtQI4pecWA?si=7ADjlx174ZGLvbsv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**_To install the React Admin Panel_**:

1. Open a new terminal.
2. Type the following command to run the admin panel:
   ```bash
   ./scripts/run-admin.sh
   ```
3. Hit **Enter** to execute the script. When you see links, that means the admin panel was built successfully.
4. Click the link: [http://localhost:5173/](http://localhost:5173/) to open the React admin panel.
5. In the browser, **hit refresh twice**. The React admin panel login screen will display. Continue to the next step.

<br/>

## Login to the Admin Panel

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/0f96Osg73sY?si=6IrYeX9vL0VVHN5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**_To log in tp the React Admin Panel_**:

1. Log in with the following credentials:
   - Username: `apiuser01`
   - Password: `Passw0rd123!`
2. Click the **Orders** tab.
   - Data should populate in the table. If it does, the admin panel is successfully connected to the database.

<br/>

## Test Swagger UI Interactivity

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/mVnaJ4sSpPQ?si=6w-QmbBsMCcyH5zF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**_To test Swagger UI interactivity_**:

1. Return to the GitHub Codespace.
2. Go to the **Ports** tab (if not already there).
3. Hover over the API Server (port 80), right-click, and select **Copy Local Address**.
4. For port 5500, click the **Forward Address** link to open Swagger UI in a new browser tab.
5. Place your cursor in the `gh-codespaces-server-url` field and paste the local address you copied previously. If there’s a slash at the end of the URL, remove it.
6. Under **Orders**, expand **GET /orders**.
7. Click the **Try it out** button.
8. Scroll down and click the blue **Execute** button. If a "Code 200" is returned in the server response section, then the request was successful, and Swagger UI is functioning properly.

<br/>

## Test Curl Commands

<br/>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/eK9zh4HhTtY?si=orujfvu2T0xHAhuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

**\_To test Curl Commands**:

1. Open a new terminal in your workspace and name it "Curl."
2. Run the following command to make a request:

   ```bash
   curl -i -X GET "https://api.chucknorris.io/jokes/random"
   ```

   The output will look something like this (the joke will vary):

   ```shell
   {"categories":[],"created_at":"2020-01-05 13:42:26.194739","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"ZYuYuFQVSfamBUYfzFADMQ","updated_at":"2020-01-05 13:42:26.194739","url":"https://api.chucknorris.io/jokes/ZYuYuFQVSfamBUYfzFADMQ","value":"Chuck Norris has more subscribers than Pewdiepie."}%
   ```

## Stop the Codespace

<iframe width="560" height="315" src="https://www.youtube.com/embed/fo4JN1T9oJU?si=zRr2c0ix8xiBFBMG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You are allotted a certain number of hours as part of the free account when using GitHub Codespaces, which is why it is important to stop your codespace when you finish your exercises.

To stop the codespace, follow these steps:

1. Go to https://github.com//codespaces.
2. Left-click the three dots next to the codespace name.
3. Select **Stop Codespace**. A banner will display at the top of the screen indicating that the codespace has been stopped.

## Wrapping Up

Congratulations! You have now set up your development environment to complete your exercises, test, and document the course API.
