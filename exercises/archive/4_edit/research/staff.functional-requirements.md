# Functional Requirements

1. **Order Placement**

   1.1. **Receive Orders**

   - The POS system shall receive and log patron orders.
   - The orders received shall be displayed on the Kitchen Display System (KDS) for preparation.

2. **Order Display**

   2.1. **KDS Monitor**

   - The KDS monitor shall display incoming orders in real-time.
   - The display shall include all necessary details for effective order management.

3. **Prioritization**

   3.1. **Adjust Priority**

   - The system shall allow expeditors to adjust the priority of each order.
   - Orders shall default to a medium priority, which can be modified based on preparation time and other factors.

4. **Initiating Preparation**

   4.1. **Set Status to "In Progress"**

   - The system shall enable expeditors to set the status of an order to "In Progress."
   - This status update shall notify kitchen stations to begin preparation of the order.

<!-- 5. **Station Assignment**

   5.1. **Assign Dishes to Stations**

   - The system shall allow expeditors to assign each dish in an order to a specific station (cold, hot, beverages).
   - Assignments shall be visible to the relevant station chefs on the KDS. -->

6. **Station View**

   6.1. **View Assigned Dishes**

   - The KDS shall display dishes assigned to each station.
   - Station chefs shall be able to view and manage their assigned dishes.

7. **Preparation**

   7.1. **Prepare Dishes**

   - Station chefs shall prepare dishes assigned to their station as per the order requirements.
   - The system shall allow chefs to update the preparation status of dishes.

8. **Station Completion**

   8.1. **Mark as "Ready for Assembly"**

   - Station chefs shall mark completed dishes as "Ready for Assembly" on the KDS.
   - This status update shall notify the expeditor that the dish is ready for the next step.

9. **Assembly Notification**

   9.1. **Notification of Completion**

   - The system shall notify the expeditor when all dishes in an order are marked "Ready for Assembly."
   - The expeditor shall use this notification to begin the assembly process.

10. **Expeditor's Action**

    10.1. **Assemble Dishes**

    - The expeditor shall assemble dishes from different stations into a complete order.
    - The assembled order shall be prepared for delivery or pickup.

11. **Order Delivery: Tableside Ordering**

    11.1. **Update Status to "On the Way"**

    - The expeditor shall update the order status to "On the Way" for tableside orders.
    - This update shall notify the food runner to deliver the order to the patron’s table.

      11.2. **Match Order Number**

    - The food runner shall match the order number with the placard on the patron's table to ensure correct delivery.

12. **Order Delivery: Takeaway Ordering**

    12.1. **Mark as "Ready for Pickup"**

    - The expeditor shall bring the order to the pickup station and mark it as "Ready for Pickup."
    - This status update shall inform patrons that their food is ready for collection.

      12.2. **Display Pickup Status**

    - Patrons shall see their order marked as "Ready for Pickup" on the monitor to confirm it is ready for collection.

These requirements ensure that staff members can efficiently handle orders, from receiving them to preparing, assembling, and delivering them according to the specific needs of tableside or takeaway services.
