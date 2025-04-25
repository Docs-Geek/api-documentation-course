## Authentication Flow

The Admin panel is a frontend CRUD (Create-Read-Update-Delete) application that uses the ocurse API on the backend to retrieve and manipulate data.

We can use it to test out our api flows using a user interface which is how the end users will using GUIs to do the tasks they need too do.

This admin panel helps test out the fucnituoanlity oof the api and also allwos you to guide developers how they cain build apps that use the api.

## Build the site

1. Open a _new_ terminal in VS Code (use Git Bash if you're on Windows).

2. Run the following script:

```shell
./scripts/run-admin.sh
```

3. If the script runs successfully, a link to the Admin panel will be displayed. Click the link or visit [http://localhost:5173/](http://localhost:5173/) to view the admin panel in your browser.

## The login page and Google chrome

The login page is the first page.

We're using Google chrome
We need to open devveloper tools.
We can open it by right-clicking and selecting inspect.
Another way to access Google Chrome is (CHatgpt fill

The tab we find most imporatnt for our purpose now is teh Network tab.
Chatgpt: Explain what the network tab is (empahsis on api calls)
Right now, we do see anything much there beacuse havevnt done anything yet with the application.
Let's start by ddoing the Authentication flow we talked about previous.
Well enter a user name and password, in this case we already havev a created user with user and password.
OPkmay we havev a lot of results in the network panel.
we dont need to see eerything, only hte api calls.
To do this, click Fetch/XHR only to see the API calls.
Lets called the api call called token.
The Headers tab shows some basic information, including the request URL, request method, adn request status code.
In this case, a call was made behind the scenes to the authentication endpoint, and 201 status code indicates the request was successful.
The Payload tab displays a request body, if there is one. its easier to view the request bodyt by clicking Vview source. View source allows us to see the raw json with the admin of we can copy and paste this snippet into our documentation. copying is kidn of tricky. you first need to click below the request body. then hit Ctrl + A, or CMD A if you are on Mac, then right click and select copy. we can now copy this into our docs.
Preview is a preview of the response, it isnt as helpeful for our purpose since we need the raw json response.
lets click Response, we can see the JSON response body,m if there is one, containing the access_token, the expires at datetime when it will expire, and the refresh_token the clinet app can use to refresh the access token rather than logging the user out and requireing him or her to log in again.
so behind the scenes, this admin panel, will save the acecess token and include it in the authorization header of the api calls that occur in this panel, and when it is expired, it will send a request to the /auth/refresh-token endpoint to get a new access token and refersh toeken. This is handles behinds the scenes for the admin panel, but the doocuemntation reader deelvoper need sto understnad the process so they can build it into their apps.n build their own applications using the api.

## Admin UI

Land on the Dashboard tab.

The left naivvation has tabs, each tab is a resource. these corerespond to the 'tags' before int eh openapi file youve viewed previously.

We need to create dishes so we can display a Menu to patrons so they can order them.

Create a hamburger:

- Beef
- Lettuce
- Tomato - 409 conflict
- Onion
- Bun

Milkshake:

- Ice cream
- Milk

## Create Ingredients

Click Ingredients - GET LIST OF INGREDIENTS. PAGINATION AND SORTING
Create beef, lettuce - POST
Create tomato - 409 Conflict
We know now its better to search for ingredients before creating them to avoid 409 errors.
Let's search for tomato, as we can see it exists. What about onion and bun, they do not see we can continue to create them. --- GET RESOURCE WITH FILTER
Create Onion
Create Bun
Now create milkshake, search for Ice cream and milk, not there, so we are good to create.

## Create dishes

Now that we have ingredients, we need to create the dishes: hamburger and milkshake.
OInce again, wecheck if the dish exists first.
Create the Hamburger - POST
When i goo to select an ingreident, yooull see an api call is made to ingredients nedpointt, passing t he id of hte ingredient to get its information: GET BY ID.
Create the Milkshake

What if we want to view a dishes info. click the recorda GET BY ID request is made so we can just view the dish's information.

## Create orders

Place an order with the hamburger and the milkshake
What if the patron wants to update the order?
Well we can search for the order by the paotrons name.
We can click the Edit button to edit.
Edit the order, save and theres a PUT reuqest with the updated property.

<!-- DELETE isnt supported right now --- WEhat is the patron wants to concael the order? Well  -->
