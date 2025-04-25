### Resolution: CORS Issues in Node.js Express Server with Frontend on Different Ports

#### Issue Summary

You are encountering Cross-Origin Resource Sharing (CORS) issues between your **Node.js Express server** running on **port 8080** and a **frontend application** running on **port 5173**. The admin app is sending requests to the server, but you are receiving the following error in the browser console:

```
Access to XMLHttpRequest at 'http://localhost:8080/auth/token' from origin 'https://5173-mawentowski-apidocument-avkz8wrtyoi.ws-us116.gitpod.io' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Additionally, the network tab shows:

```
Request URL: http://localhost:8080/auth/token
Referrer Policy: strict-origin-when-cross-origin
```

#### Current Configuration

- **Server Script**: `./server/index-gitpod.js` (configured for CORS previously)
- **Frontend Files**:
  - `./admin-gitpod/src/authProvider.ts`: Manages authentication requests
  - `./admin-gitpod/src/dataProvider.ts`: Handles API requests from the app

#### Root Cause

The **CORS policy** is blocking the requests due to the **lack of appropriate `Access-Control-Allow-Origin` headers** in the server's response. Your frontend is served from a different origin (`https://5173-mawentowski-apidocument-avkz8wrtyoi.ws-us116.gitpod.io`), and this origin is not included in the list of allowed origins in your Express server configuration.

#### Steps to Resolve

1. **Verify the CORS Configuration in Your Server Script**:
   In your `./server/index-gitpod.js` file, you need to ensure that the **allowed origins** in your CORS configuration match the origin of your frontend application.

   If you are using the `cors` package, your configuration might look like this:

   ```javascript
   const cors = require("cors");

   const allowedOrigins = [
     "https://5173-mawentowski-apidocument-avkz8wrtyoi.ws-us116.gitpod.io", // Update with your frontend origin
     "http://localhost:5173", // Localhost origin for development
   ];

   app.use(
     cors({
       origin: function (origin, callback) {
         if (!origin || allowedOrigins.includes(origin)) {
           callback(null, true);
         } else {
           callback(new Error("Not allowed by CORS"));
         }
       },
       credentials: true, // This ensures cookies are sent with requests if needed
     }),
   );
   ```

2. **Identify the Correct Origin for Your Frontend**:
   The **origin** consists of:

   - **Protocol**: `http` or `https`
   - **Domain/Subdomain**
   - **Port** (if it’s a non-default port)

   In your case, the origin of your Gitpod URL is:

   ```
   https://5173-mawentowski-apidocument-avkz8wrtyoi.ws-us116.gitpod.io
   ```

   Ensure that this exact URL is included in the `allowedOrigins` array of your CORS configuration.

3. **Wildcard (\*) Option**:
   If you want to allow requests from any origin (not recommended for production environments), you can use the wildcard `"*"` in the CORS configuration. However, since your API requires **Authorization headers**, the wildcard will not work in your case.

   Authorization headers trigger **preflight requests**, which require explicit origins in the `Access-Control-Allow-Origin` header.

4. **Review Authentication Flow**:

   - Ensure that your CORS configuration supports **credentials** if your frontend is sending authentication tokens (like JWT) or cookies to the server.

5. **Restart and Test**:
   After updating the CORS configuration, restart the Node.js server and test the connection again by accessing your frontend.

6. **Further Actions**:
   If the issue persists, verify the following:
   - Confirm that the origin of the requests sent from the frontend matches the allowed origin in the server.
   - Check if any middleware is overriding the CORS headers.
   - Inspect the `authProvider.ts` and `dataProvider.ts` files to confirm they are properly routing API requests.

#### Uninstall and Reinstall Node.js (If Needed)

If the issue is related to Node.js or npm installation, you can follow these steps to uninstall and reinstall Node.js:

1. **Uninstall via Control Panel**:

   - Open Control Panel (`Win + R`, type `control`, press Enter)
   - Navigate to **Programs** → **Programs and Features**
   - Find **Node.js** in the list and uninstall it.

2. **Reinstall Node.js**:

   - Refer back to the Windows setup instructions (`Windows-setup.md`) for reinstalling Node.js and npm.

3. **Test Script Execution**:
   - After reinstalling, run `./scripts/run-admin.sh` again and share the output if further troubleshooting is needed.

#### Final Steps

After making the necessary changes, try running your app again and see if the issue is resolved. If not, provide the updated error logs for further guidance.

---

### Conclusion

The CORS issue is most likely due to the mismatch between the frontend and backend origins. By updating the `allowedOrigins` in your CORS configuration to include the correct frontend origin, the issue should be resolved. Let me know if you run into any further issues or need additional help.

---

This document outlines the problem, identifies the root cause, and provides a step-by-step resolution approach.
