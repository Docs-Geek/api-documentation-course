import axios from "axios";

interface LoginParams {
  username: string;
  password: string;
}

// Disable authentication in dev/test environments
const DISABLE_AUTH = false;

const clientId = "admin_web_app";
const clientSecret = "a5d7f23e-8b64-4b4c-9b11-21c5cfdf25f1";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:80";

export const authProvider = {
  login: async ({ username, password }: LoginParams): Promise<void> => {
    if (DISABLE_AUTH) {
      console.log("Auth disabled: automatically logging in.");
      return Promise.resolve();
    }

    try {
      const basicAuth = btoa(`${clientId}:${clientSecret}`);
      const response = await axios.post(
        `${apiUrl}/auth/token`,
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
        },
      );

      const { access_token, expires_at, refresh_token } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_at", expires_at);
      localStorage.setItem("refresh_token", refresh_token);

      return Promise.resolve();
    } catch (error) {
      console.error("Login failed", error);
      return Promise.reject();
    }
  },

  logout: (): Promise<void> => {
    console.log("Logging out...");
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("refresh_token");
    return Promise.resolve();
  },

  checkAuth: async (): Promise<void> => {
    if (DISABLE_AUTH) {
      console.log("Auth disabled: checkAuth always passing.");
      return Promise.resolve();
    }

    const accessToken = localStorage.getItem("access_token");
    const expiresAt = localStorage.getItem("expires_at");

    if (!accessToken) {
      return Promise.reject();
    }

    const expiryDate = expiresAt ? new Date(expiresAt) : new Date(0);
    let isRefreshingToken = false;
    let refreshTokenPromise: Promise<void> = Promise.resolve();

    if (expiryDate < new Date()) {
      if (!isRefreshingToken) {
        isRefreshingToken = true;
        refreshTokenPromise = (async () => {
          try {
            const refreshToken = localStorage.getItem("refresh_token");
            if (!refreshToken) {
              throw new Error("No refresh token found, please log in again.");
            }

            const response = await axios.post(
              `${apiUrl}/auth/refresh-token`,
              { refresh_token: refreshToken },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              },
            );

            const { access_token, expires_at, refresh_token: newRefreshToken } = response.data;

            localStorage.setItem("access_token", access_token);
            localStorage.setItem("expires_at", expires_at);
            localStorage.setItem("refresh_token", newRefreshToken);
          } catch (error) {
            console.error("Token refresh failed", error);
            return Promise.reject();
          } finally {
            isRefreshingToken = false;
            refreshTokenPromise = null;
          }
        })();
      }

      if (refreshTokenPromise) {
        await refreshTokenPromise;
      }

      return Promise.resolve();
    }

    return Promise.resolve();
  },

  checkError: (error: any): Promise<void> => {
    if (DISABLE_AUTH) {
      return Promise.resolve();
    }

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
      fullName: DISABLE_AUTH ? "Dev User" : "API User",
    });
  },

  getPermissions: (): Promise<string> => {
    return Promise.resolve(DISABLE_AUTH ? "admin" : "");
  },
};

export default authProvider;
