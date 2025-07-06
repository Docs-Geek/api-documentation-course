# Class #1: Teacher Aid

Prerequisites:

- Client app:
  - `api-documentation-course/client`
- GitHub Codespaces open - Use the Curl terminal tab in GH codespaces for demonstration.

## Teacher Aid Part #1

### Website review

- https://api.chucknorris.io/
- Simple API Documentation.
- Request example/response examples.
- Click "Get me a new one" to view a new response.
- Schema missing from docs.

### Curl

#### Retrieve a random chuck joke in JSON format

- API request using Curl:

```shell
curl -X GET https://api.chucknorris.io/jokes/random
```

- In the response, look for `value` field. This contains the joke. The rest is metadata about the joke.
- If you re-send the request, get a different joke.

#### Retrieve a list of joke categories

- To retrieve a joke by a category, we must first see what categories are available since they are not listed.
- To do that, we skip to the following request:

```shell
curl -X GET https://api.chucknorris.io/jokes/categories
```

#### Retrieve a random chuck norris joke from a given category

```shell
curl -X GET "https://api.chucknorris.io/jokes/random?category=music"
```

### Browser

#### Retrieve a random Chuck joke in JSON format

- Don't need Chrome Dev Tools as it displays directly in the browser.
- Web browser as a client rather than a local machine. Pretty print.

#### Retrieve a list of joke categories

#### Retrieve a random Chuck Norris joke from a given category

- Click link - 404 error response:
  - https://api.chucknorris.io/jokes/random?category={category}
- Need to replace that placeholder query with something like "music"

#### Retrieve a joke its ID

- Copy from the URL of the response to the previous request.
  - https://api.chucknorris.io/jokes/HIxPMBmKRyGkf34DF-Y3hg

#### Free text search

- Click the link. Once again, get a 400 Bad Request.
- Edit the URL in the browser:
  - https://api.chucknorris.io/jokes/search?query=martial%20arts
- This time we have a list of results, with a total amount specified. So we can retrieve not only one resource at a time but also a list of resources.

## In-class exercise

We are going to practice sending API requests directly in the browser. You will retrieve a specific joke based on a category of your choice.

1. Go to https://api.chucknorris.io/.
2. Click "Retrieve a list of available categories". Remember, you can click the links directly from the website.
   1. Click the Pretty-print checkbox to make the code more readable.
   2. Copy a category from the JSON response. You only need the category text, not the quotation marks.
3. Click the link "Retrieve a random Chuck Norris joke from a given category."
   1. Replace `{category}` in the URL with the category you copied previously and hit Enter.
   2. Copy the `url` from the response, excluding quotation marks. The URL will look like: `https://api.chucknorris.io/jokes/xyz`
4. Paste the URL copied previously into the browser's address bar and hit enter to view the webpage for that specific joke.
5. Copy the specific joke and paste it into the chat.

That's the end of this exercise.

## Teacher Aid Part #2

Share full screen.

1. Open the Javascript web app.
2. To observe the API calls being made, open Chrome DevTools.
3. Click on the 'Fetch/XHR' tab to filter and show only API calls.
4. You should see three requests.

Next, let's compare what we see on the screen with the corresponding API calls. The web app retrieves data to display on the webpage instead of showing only static content.

### `random` Request

- Check the random joke displayed on the screen.
- Review the URL, method, status code, and the response that includes the joke text.

### `?query=martial%20arts` Request

This is for "free text search."

- Examine the URL, method, status code, and the response containing the joke text.
- The same approach applies for the request with `?query=justice`, which is also a free-form text search.

Finally, if you refresh the page, all jokes are refreshed so the web app has fresh data.
