# Teacher aid

## Demo: Mermaid basic features

```mermaid
graph TD;
    A[Start pirate adventure] --> B[Search for treasure];
    B --> C[Treasure found?];
    C -->|Yes| D[Enjoy the spoils];
    C -->|No| B
```

## Demo & Code-along: Diagram the patron user journey verbatin

```mermaid
journey
    title Patron user journey - food ordering
    section browsing the menu
      Browse categories: 5: Patron
      View dish details: 5: Patron
    section Selecting dishes
      Add dishes to order: 5: Patron
      View bill: 5: Patron
    section Placing the order
      Place order: 5: Patron
      On-screen confirmation: 5: Patron
```

## Codealong: Diagram the staff user journey verbatim

```mermaid
journey
    title Staff User Journey - Order Fulfillment
    section Receive Order
      Prioritization: 5: Expeditor
      Initiate Preparation: 5: Expeditor
    section Preparation
      Preparation: 5: Station
      Station Completion: 5: Station
      Assemble order: 5: Expeditor
```

## Codealong: Diagram the admin user journey verbatim

```mermaid
journey
    title Admin user journey
      Admin Login to Admin App: 5: Admin
      Create Ingredients: 5: Admin
      Create Dishes: 5: Admin
      Monitor Inventory Levels: 5: Admin

```

Open Chrome Developer Tools, and in the **Network** tab, clear previous entries (click the icon with a circle and slash).

After saving, new network entroes should appear in **Chrome Developer Tools**. Locate the one related to

under the **Network** tab: `<code>{;} ingredients</code>`.

Crostini di Fegato
Lasagna alla Bolognese
Gelato
