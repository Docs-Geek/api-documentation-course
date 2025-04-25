```mermaid
sequenceDiagram
    participant User
    participant API
    participant Database

    User->>API: Send API Request
    API->>Database: Process Request
    alt Success
        Database-->>API: Return Data
        API-->>User: Return Success Response
    else Error
        Database-->>API: Return Error
        API-->>User: Return Error Response
    end

```

Placing an order