## Domain modeling:

### Concepts

```mermaid
classDiagram 
    direction LR
    class User {
    }

    class Stock {
    }

    class Order {
    }
```

## Attributes

```mermaid
classDiagram 
    direction LR
    class User {
        ID
        user name
        email
    }

    class Stock {
        symbol
        company name
        price
    }

    class Order {
        ID
        Stock
        Quantity
        Status
        Timestamp
    }
```

## Actions


```mermaid
classDiagram 
    direction LR
    class User {
        ID
        user name
        email
        --------------
        Login
        Logout
        Register
        Reset password
    }

    class Stock {
        symbol
        company name
        price
        --------------
        Look up price
    }

    class Order {
        ID
        Stock
        Quantity
        Status
        Timestamp
        --------------
        Place buy order
        Place sell order
    }
```

## Relationships

```mermaid
classDiagram 
    direction LR
    class User {
        ID
        user name
        email
        --------------
        Login
        Logout
        Register
        Reset password
    }

    class Stock {
        symbol
        company name
        price
        --------------
        Look up price
    }

    class Order {
        ID
        Stock
        Quantity
        Status
        Timestamp
        --------------
        Place buy order
        Place sell order
    }

    User -- Order : places >
    User -- Stock : tracks >

```



## Full

```mermaid
erDiagram
    Student {
        student_id INT PK
        first_name VARCHAR
        last_name VARCHAR
        email VARCHAR
    }
    Course {
        course_id INT PK
        title VARCHAR
        credit_hours INT
    }
    Enrollment {
        enrollment_id INT PK
        student_id INT FK
        course_id INT FK
        grade VARCHAR
    }

    Student ||--o{ Enrollment : "enrolls in"
    Course ||--o{ Enrollment : "enrolled in"
```

## Entities

```mermaid
erDiagram
    Student {
    }
    Course {
    }
    Enrollment {
    }
```

## Attributes


```mermaid
erDiagram
    Student {
        student_id INT
        first_name VARCHAR
        last_name VARCHAR
        email VARCHAR
    }
    Course {
        course_id INT
        title VARCHAR
        credit_hours INT
    }
    Enrollment {
        enrollment_id INT
        student_id INT
        course_id INT
        grade VARCHAR
    }
```


Relationships


## Cardinality

```mermaid
erDiagram
    Student {
        student_id INT
        first_name VARCHAR
        last_name VARCHAR
        email VARCHAR
    }
    Course {
        course_id INT
        title VARCHAR
        credit_hours INT
    }
    Enrollment {
        enrollment_id INT
        student_id INT
        course_id INT
        grade VARCHAR
    }

    Student ||--o{ Enrollment : "enrolls in"
    Course ||--o{ Enrollment : "enrolled in"
```


## Foreign key

```mermaid
erDiagram
    Student {
        student_id INT PK
        first_name VARCHAR
        last_name VARCHAR
        email VARCHAR
    }
    Course {
        course_id INT PK
        title VARCHAR
        credit_hours INT
    }
    Enrollment {
        enrollment_id INT PK
        student_id INT FK
        course_id INT FK
        grade VARCHAR
    }

    Student ||--o{ Enrollment : "enrolls in"
    Course ||--o{ Enrollment : "enrolled in"
```


## one to one

```mermaid
erDiagram
    Pirate {
        pirate_id INT
        name VARCHAR
    }
    Parrot {
        parrot_id INT
        name VARCHAR
    }

    Parrot ||--|| Pirate: "belongs to"
```

many to one

```mermaid
erDiagram
    Astronaut {
        astronaut_id INT PK
        name VARCHAR
    }
    Spaceship {
        spaceship_id INT PK
        name VARCHAR
    }
    Astronaut ||--o{ Spaceship: "lives on"
```

one to many

```mermaid
erDiagram
    Monkey {
        monkey_id INT PK
        name VARCHAR
    }
    Banana {
        banana_id INT PK
        name VARCHAR
    }

    Monkey }o--|| Banana: "eats"
```

many to many





```mermaid
classDiagram
    direction LR
    class User {
        ID
        user name
        email
        -------------
        Login
        Logout
        Register
        ResetPassword
    }

    class Post {
        ID
        title
        content
        author
        published date
        -------------
        Create
        Update
        Delete
    }

    User -- Post : writes 

```



```mermaid
classDiagram
    direction LR
    class User {
    }

    class Post {
    }
```