# Offline exercise: Refine API reference

Setup

Ensure Docker Desktop is running
Open Postman
Create a user for yourself
Authenticate the user to get an access token
Open Swagger UI
Click the Authorize
Add the access token and click Authorize
When your access token epxires in 30 minutes, you can refresh your access token using the refresh token and so on as neeeed.

Explain that the end goal is to submit anb order, but to do that we need too create at least one dish, to create at least one dish, you need at least one ingredient, so we have to start with the ingredients.

====
Need to give some nedpooint specific instructions.
Maybe have best practices summarized for them as a cheatsheet?
====

## ObjectiveL

The informal Opeapi fields, for example, the summary, description, and example fields are empty and need to be populated with content.

Oftentimes, fields refer to 'refs' as a way to centralize field descriptions, so you would update the descriptions in the central locations.

## Tip

Pay attention to the Swagger erreors.
Refresh yourself on YAMKL - -indentations are key.

You'll use the guidelines outline in the training session for general guidance. you can find those here \_\_\_>

├─ Refining API reference
Formal vs informal descriptions
What is a API refernece?
Writing informal descriptions
Balancing level of detail
Markdown in OpenAPI
Summarizing endpoints
Documenting endpoint descriptions
Documenting fields
Documenting responses
Documenting error handling
Identifying anti-patterns

In additon, there are endpoint specific guidelines that are proided below.

## Endpoints

### Orders

#### POST

The following API clients can be used to place orders: mobile app, tablet app, self-service kiosk

#### GET a list of

It is commonly used to view the `status` and `priority` of orders on the current day or view historical orders for inventory and analytics purposes.

#### PUT

Only certain fields can be updated. You have to figure out which ones.

### Dishes

### Ingredients

### Users

### Auth
