import axios from "axios";

interface LoginParams {
  username: string;
  password: string;
}

// Use environment variables to dynamically set the base URL

const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_SERVER_URL || "http://localhost:8080";

const VITE_REACT_APP_HOST_URL = import.meta.env.VITE_REACT_APP_HOST_URL;

console.log("API Base URL in authProvider is:", API_BASE_URL);
const clientId = "admin_web_app";
const clientSecret = "a5d7f23e-8b64-4b4c-9b11-21c5cfdf25f1";

let isRefreshingToken = false;
let refreshTokenPromise: Promise<void> = Promise.resolve();
let lastAuthCheck = 0;

export const authProvider = {
  login: async ({ username, password }: LoginParams): Promise<void> => {
    try {
      const basicAuth = btoa(`${clientId}:${clientSecret}`);
      const response = await axios.post(
        `${API_BASE_URL}/auth/token`,
        {
          grant_type: "password",
          user_name: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${basicAuth}`,
          },
          withCredentials: true, // Include credentials with the request
        },
      );

      const { access_token, expires_at, refresh_token } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_at", expires_at);
      localStorage.setItem("refresh_token", refresh_token);

      return Promise.resolve();
    } catch (error) {
      console.error("Login failed", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      return Promise.reject();
    }
  },

  logout: (): Promise<void> => {
    console.log("logging out and invalidating all tokens");
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("refresh_token");
    return Promise.resolve();
  },

  checkAuth: async (): Promise<void> => {
    const now = Date.now();
    if (now - lastAuthCheck < 1000) {
      console.warn("Throttling checkAuth call.");
      return Promise.resolve(); // Don't reject, just skip this check
    }
    lastAuthCheck = now;

    console.log("API Base URL in authProvider is:", API_BASE_URL);
    console.log("beginning to verify auth...");

    const accessToken = localStorage.getItem("access_token");
    const expiresAt = localStorage.getItem("expires_at");

    if (!accessToken) {
      console.warn("No access token found, login required.");
      window.location.href = `${VITE_REACT_APP_HOST_URL}`; // Redirect to custom login URL
      return Promise.reject();
    }

    const expiryDate = expiresAt ? new Date(expiresAt) : new Date(0);

    if (expiryDate < new Date()) {
      if (!isRefreshingToken) {
        isRefreshingToken = true;

        refreshTokenPromise = (async (): Promise<void> => {
          try {
            const refreshToken = localStorage.getItem("refresh_token");
            if (!refreshToken) {
              throw new Error("No refresh token found, please log in again.");
            }

            const response = await axios.post(
              `${API_BASE_URL}/auth/refresh-token`,
              { refresh_token: refreshToken },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              },
            );

            const { access_token, expires_at, refresh_token } = response.data;

            localStorage.setItem("access_token", access_token);
            localStorage.setItem("expires_at", expires_at);
            localStorage.setItem("refresh_token", refresh_token);
          } catch (error) {
            console.error("Token refresh failed", error);
            throw error;
          } finally {
            isRefreshingToken = false;
          }
        })();
      }

      await refreshTokenPromise;
    }

    return Promise.resolve();
  },

  checkError: (error: any): Promise<void> => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("refresh_token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: (): Promise<{ id: string; fullName: string }> => {
    return Promise.resolve({
      id: "user",
      fullName: "API User",
    });
  },

  getPermissions: (): Promise<string> => {
    return Promise.resolve("");
  },
};

export default authProvider;
