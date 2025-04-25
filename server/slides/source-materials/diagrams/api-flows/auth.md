## Authentication API Flow

### 1. Account Creation

To access protected endpoints, users must create an application-specific account.

**Endpoint:** `POST /users`

**Description:** Create a user account.

**Request Example:**

```bash
curl -X 'POST' \
  'http://localhost:80/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "jimcarrey@gmail.com",
    "password": "P@ssw0rd!",
    "role": "manager",
    "user_name": "jimcarrey"
  }'
```

**Response Example:**

```json
{
  "id": "66e2f348ea5ad311fdfc5630",
  "created_at": "2024-09-12T13:57:28.148Z",
  "updated_at": "2024-09-12T13:57:28.148Z",
  "user_name": "jimcarrey",
  "password": "P@ssw0rd!",
  "email": "jimcarrey@gmail.com",
  "role": "manager"
}
```

_Note: The server simplifies authentication by accepting any email._

### 2. User Login

To interact with protected endpoints, the client app requires an access token.

**Endpoint:** `POST /auth/token`

**Description:** Authenticate user and obtain an access token.

**Request Example:**

```bash
curl -X 'POST' \
  'http://localhost:80/auth/token' \
  -H 'accept: application/json' \
  -H 'Authorization: Basic <base64-encoded-client-id:client-secret>' \
  -H 'Content-Type: application/json' \
  -d '{
    "grant_type": "password",
    "password": "P@ssw0rd!",
    "user_name": "jimcarrey"
  }'
```

**Response Example:**

```json
{
  "created_at": "2024-09-12T14:04:44.635Z",
  "updated_at": "2024-09-12T14:04:44.635Z",
  "access_token": "0edb435d-d75e-44c8-ae2d-5b7146db527e",
  "expires_at": "2024-09-12T14:34:44.635Z",
  "refresh_token": "9f753175-a65a-49d8-971f-62f9a8fad71f",
  "token_type": "Bearer",
  "user_name": "jimcarrey",
  "_id": "66e2f4fcea5ad311fdfc5634"
}
```

- `access_token`: The token used for authentication.
- `expires_at`: Expiry datetime of the access token.
- `refresh_token`: Token used to obtain a new access token when the current one expires.
- `token_type`: Indicates that this is a Bearer token.

### 3. Refreshing the Access Token

If the access token expires, the client needs to request a new one.

**Endpoint:** `POST /auth/refresh-token`

**Description:** Refresh access token.

**Request Example:**

```bash
curl -X 'POST' \
  'http://localhost:80/auth/refresh-token' \
  -H 'accept: application/json' \
  -d '{
    "refresh_token": "e74ed59d-6117-44fa-97d7-17fbda92e869"
  }'
```

**Response Example:**

```json
{
  "created_at": "2024-09-12T12:11:19.152Z",
  "updated_at": "2024-09-12T12:11:19.153Z",
  "access_token": "d119eec2-6d63-4f55-b319-949695256371",
  "expires_at": "2024-09-12T12:41:19.153Z",
  "refresh_token": "32717991-884d-4a30-bd84-b4cb29c85f44",
  "token_type": "Bearer",
  "user_name": "jimcarrey"
}
```

- The client updates its stored access and refresh tokens with the new values and continues to use the new access token for authenticated requests.
