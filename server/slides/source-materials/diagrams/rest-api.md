```mermaid
sequenceDiagram
    participant Client
    participant REST_API_Server
    participant Database

    Client->>REST_API_Server: HTTP Request
    REST_API_Server->>Database: Query
    Database-->>REST_API_Server: Data
    REST_API_Server-->>Client: HTTP Response

```