# User journeys

- [User journeys](#user-journeys)
  - [The patron user journey](#the-patron-user-journey)
    - [Arrival on the dashboard](#arrival-on-the-dashboard)
    - [Browsing the menu](#browsing-the-menu)
    - [Selecting Dishes](#selecting-dishes)
    - [Placing the Order](#placing-the-order)
    - [Receiving Confirmation](#receiving-confirmation)
    - [Order delivery: Tableside ordering](#order-delivery-tableside-ordering)
    - [Order delivery: Takeaway ordering](#order-delivery-takeaway-ordering)
  - [The staff user journey](#the-staff-user-journey)
    - [Order Placement](#order-placement)
    - [Order Display](#order-display)
    - [Prioritization](#prioritization)
    - [Initiating Preparation](#initiating-preparation)
    - [Station Assignment](#station-assignment)
    - [Station View](#station-view)
    - [Preparation](#preparation)
    - [Station Completion](#station-completion)
    - [Assembly Notification](#assembly-notification)
    - [Expeditor's Action](#expeditors-action)
    - [Order delivery: Tableside ordering](#order-delivery-tableside-ordering-1)
    - [Order delivery: Takeaway ordering](#order-delivery-takeaway-ordering-1)
  - [The admin user journey](#the-admin-user-journey)
    - [Admin login to admin app](#admin-login-to-admin-app)
    - [Create ingredients](#create-ingredients)
    - [Create dishes](#create-dishes)
    - [Monitor inventory levels](#monitor-inventory-levels)

## The patron user journey

Each action taken by the user in the app triggers CRUD operations
handled by the API server logic.

Let\'s chart the patron\'s user journey.

### Arrival on the dashboard

The patron opens the food ordering app.

### Browsing the menu

They explore different categories such as Appetizers, Main Courses, and
Desserts.

They browse through the list of dishes, viewing details such as name,
description, and price.

### Selecting Dishes

Patron selects a few dishes they want to order by clicking on them or
adding them to their cart.

They adjust quantities and customize options as needed (e.g., specifying
cooking preferences or dietary restrictions).

### Placing the Order

Patron proceeds to the checkout page.

They review their order summary, ensuring all selected items are
correct.

They select their preferred payment method and enter any additional
details required (e.g., delivery address).

Patron confirms the order and clicks the \"Place Order\" button.

### Receiving Confirmation

The app displays an on-screen confirmation message, indicating that the
order has been successfully placed.

### Order delivery: Tableside ordering

For table-side ordering, the patron takes a placard with their order
number to their table.

When their order is ready, the restaurant staff brings their order to
their table.

### Order delivery: Takeaway ordering

For takeaway, the patron receives a receipt with an order number.

At the takeaway station, the progress of patron orders displays on a
monitor.

The patron waits for their order to be marked \'Ready for pickup\'.

The patron picks up their order.

\## The Staff user journey

## The staff user journey

Staff, including expeditors and chefs, are restaurant employees who
track and prepare orders.

They use Kitchen Display Systems (KDSs) to monitor and update the
progress of each order.

Like food ordering apps, each action taken by a KDS user triggers CRUD
operations handled by the API server logic.

Let\'s chart the patron\'s user journey.

### Order Placement

The patron places an order through the POS system.

The order is transmitted to the Kitchen Display System (KDS) in the
kitchen.

### Order Display

After the patron places the order, the expeditor sees the order on their
KDS monitor.

### Prioritization

The expeditor can adjust the priority of the order. By default, orders
are set to medium. The expeditor may increase the priority for orders
that require a longer preparation time.

### Initiating Preparation

The expeditor initiates the preparation by setting the status of the
order to \"In Progress\".

### Station Assignment

Each dish in the order is assigned to a specific station (e.g., cold,
hot, beverages).

### Station View

Stations responsible for each dish see their respective parts of the
order on their KDS.

### Preparation

Stations prepare their assigned dishes.

### Station Completion

When a station completes preparation of their part of the order, they
mark it as \"Ready for Assembly\" on their KDS.

### Assembly Notification

The expeditor is notified when all stations have marked their parts as
ready.

### Expeditor\'s Action

The expeditor assembles the parts of the order from different stations.

### Order delivery: Tableside ordering

Once assembled, the expeditor updates the order status to \"On the
way\".

A food runner is notified (perhaps through a mobile app) and proceeds
the the expeditor station to collect the order.

The food runner reads the order number on the ticket and delivers the
order to the customer by matching it with the order number displayed on
the placard at their table.

### Order delivery: Takeaway ordering

Once assembled, the expeditor brings the order to the pickup station.

The expeditor updates the order status to \"Ready for pickup\", which
displays on the pickup station screen.

The patron sees their order is \"Ready for pickup\" on the pickup
station screen and picks up their order.

\## The Admin User Journey

## The admin user journey

Admins are any users that perform administrative functions such as
creating ingredients and dishes.

For example, real-world restaurant managers or developers testing the
API.

Admins use a separate application that requires them to login using an
email and password.

Let\'s chart the admin\'s user journey.

### Admin login to admin app

The journey begins with the admin logging into the admin application
using their credentials to gain access to administrative functions.

### Create ingredients

Ingredients are fundamental components used to create dishes.

Admins create ingredients and specify their quantity to track inventory
levels accurately.

This ensures there are sufficient ingredients available to fulfill
customer orders.

### Create dishes

Admins proceed to create dishes by incorporating essential and
non-essential ingredients.

For example, chicken is essential to prepare a chicken sandwich, but
lettuce is not.

This feature ensures dishes are correctly displayed in the user
interface and indicates availability to customers.

### Monitor inventory levels

Admins monitor ingredient inventory to prevent shortages that could make
dishes unavailable.
