# Entity relationships

The following explains the relationships and cardinality of the entities the ER diagrams.

### 1. **PATRON ||--|| ORDER: Places**

- **Relationship:** A Patron places an Order.
- **Cardinality:** One-to-Many (1:N)
  - **Explanation:** Each Patron can place multiple Orders, but each Order is placed by exactly one Patron. This means that there is a one-to-many relationship from Patron to Order.

### 2. **ORDER ||--|{ DISH: Contains**

- **Relationship:** An Order contains multiple Dishes.
- **Cardinality:** One-to-Many (1:N)
  - **Explanation:** Each Order can contain multiple Dishes, but each Dish in an Order belongs to exactly one Order. This indicates that there is a one-to-many relationship from Order to Dish.

### 3. **DISH ||--|{ INGREDIENT: Contains**

- **Relationship:** A Dish contains multiple Ingredients.
- **Cardinality:** One-to-Many (1:N)
  - **Explanation:** Each Dish can have multiple Ingredients, but each Ingredient is associated with exactly one Dish. This represents a one-to-many relationship from Dish to Ingredient.

### 4. **AUTH ||--|| USER: Authenticates**

- **Relationship:** An Auth record authenticates a User.
- **Cardinality:** One-to-One (1:1)
  - **Explanation:** Each Auth record corresponds to exactly one User, and each User can have only one Auth record. This signifies a one-to-one relationship between Auth and User.

### 5. **USER ||--|{ INGREDIENT: Creates**

- **Relationship:** A User creates multiple Ingredients.
- **Cardinality:** One-to-Many (1:N)
  - **Explanation:** Each User can create multiple Ingredients, but each Ingredient is created by exactly one User. This reflects a one-to-many relationship from User to Ingredient.

### 6. **USER ||--|{ DISH: Creates**

- **Relationship:** A User creates multiple Dishes.
- **Cardinality:** One-to-Many (1:N)
  - **Explanation:** Each User can create multiple Dishes, but each Dish is created by exactly one User. This describes a one-to-many relationship from User to Dish.

### Summary

- **PATRON to ORDER:** One Patron can place multiple Orders. Each Order is placed by one Patron.
- **ORDER to DISH:** Each Order contains multiple Dishes. Each Dish is part of one Order.
- **DISH to INGREDIENT:** Each Dish contains multiple Ingredients. Each Ingredient is part of one Dish.
- **AUTH to USER:** Each Auth record is linked to one User, and each User has one Auth record.
- **USER to INGREDIENT:** Each User can create multiple Ingredients. Each Ingredient is created by one User.
- **USER to DISH:** Each User can create multiple Dishes. Each Dish is created by one User.

These explanations should help in understanding the relationships and cardinalities between the entities in your ER diagram.
