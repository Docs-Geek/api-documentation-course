# Import Postman Collections into Postman

**Prerequisites**:

- In the previous section, you should have pasted the local address of the API server into a text file. You must copy the local address from that file for this section.

1. **Download Postman files from GitHub**:

   - Go to [postman/Environment Variables.postman_environment.json](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/postman/Environment%20Variables.postman_environment.json)

   - On the page's right side, click the downward arrow button to download the file.

     For example:

     ![](assets/images/download-raw-file-gh.gif)

   - Go to [postman/Point of Service (POS) API.postman_collection.json](<https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/postman/Point%20of%20Service%20(POS)%20API.postman_collection.json>)

   - On the page's right side, click the downward arrow button to download the file.

     The two files are now downloaded to your **Downloads** folder.

2. **Launch Postman:**

   - Download and install [Postman](https://www.postman.com/downloads/).
   - Open the Postman application on your computer.

3. **Create a Postman account:**
   If this is your first time using Postman, you’ll be prompted to create an account. You can sign up using an email address or continue with a Google or GitHub account. This account will allow you to save your work and sync it across devices.

   Note for Windows Users: If you encounter a dialog saying "Windows Defender Firewall has blocked some features of this app," it's safe to click "Allow Access" to ensure Postman can function properly. This is a standard security prompt and won't harm your system.

4. **Go to the Import Menu:**
   Click on the **Import** button located in the top-left corner of the Postman app or use the shortcut `Ctrl + O` (Windows/Linux) or `Cmd + O` (Mac).

5. **Import Files:**

   - In the **Import** dialog, you’ll see options to
   - Where it says, **Drop Anywhere to Import**, drag and drop the 2 Postman files downloaded earlier from your **Downloads** folder, or where you downloaded the Postman files previously.
   - Postman should display two files for import. Click **Import** to import all files.

6. **Select the Environment:**

   - In the top-right corner of the Postman app, click **No Environment**.
   - Select **Environment Variables**.

---

### 7. **Set `baseUrl` in Environment Variables**

Follow the steps shown in the video below.

![](assets/images/gitpod/paste-server-url.gif)

For written instructions:

- Click the **Environments** tab.
- Select **Environment Variables**.
- Paste the server URL you copied earlier into both the **Initial Value** and **Current Value** fields for the `baseUrl` variable.
- Save the file.

### 8. **Test the `baseUrl` Configuration**

Verify the setup by following the steps in the video below.

![](assets/images/test-postman.gif)

For written instructions:

- Click the **Collections** tab.
- Expand the **Point of Service (POS) API** collection.
- Expand the **Dishes** folder.
- Open the **Get a List of Dishes** request.
- Click the blue **Send** button.

If the response returns successfully, your Postman configuration is correct.
