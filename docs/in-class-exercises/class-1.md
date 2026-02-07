# Class #1: In-Class Exercises

We are going to practice sending API requests directly in the browser. You will retrieve a specific joke based on a category of your choice.

1. Go to [https://api.chucknorris.io/](https://api.chucknorris.io/).
2. Click "Retrieve a list of available categories". Remember, you can click the links directly from the website.
   1. Click the Pretty-print checkbox to make the code more readable.
   2. Copy a category from the JSON response. You only need the category text, not the quotation marks.
3. Click the link "Retrieve a random Chuck Norris joke from a given category."
   - Replace `{category}` in the URL with the category you copied previously and hit Enter.
   - Copy the `ID` of the joke from the response, excluding quotation marks.
4. Edit the address bar: https://api.chucknorris.io/jokes/{id}, substituting the `{id}` with the ID you copied previously. Hit ENTER.
5. Copy the specific joke that is wrapped in quotes and paste it into the chat.
