document.addEventListener('DOMContentLoaded', function () {
  const jokeContainer = document.getElementById('joke-container');
  let randomJokeBlockquote;
  let isPolling = true; // Boolean to control polling

  // Function to fetch jokes from API
  async function fetchJokes(query) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    return data.result || []; // Return an array of jokes
  }

  // Function to fetch a random joke
  async function fetchRandomJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data.value; // Return the joke text
  }

  // Function to create joke section
  function createJokeSection(title, jokes) {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = title;
    section.appendChild(heading);

    jokes.forEach((joke) => {
      const blockquote = document.createElement('blockquote');
      blockquote.innerHTML = `<em>${joke.value}</em>`;
      section.appendChild(blockquote);
    });

    return section;
  }

  // Function to load jokes
  async function loadJokes() {
    jokeContainer.innerHTML = ''; // Clear previous content

    // Create main heading with image
    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Chuck Norris Jokes';
    mainHeading.style.textAlign = 'center';

    const chuckImage = document.createElement('img');
    chuckImage.src = 'https://api.chucknorris.io/img/avatar/chuck-norris.png';
    chuckImage.alt = 'Chuck Norris';
    chuckImage.style.display = 'block';
    chuckImage.style.margin = '0 auto';

    jokeContainer.appendChild(mainHeading);
    jokeContainer.appendChild(chuckImage);

    // Create "Today's Random Joke" section
    const randomJokeSection = document.createElement('section');
    const randomHeading = document.createElement('h2');
    randomHeading.textContent = "Today's Random Joke";
    randomJokeSection.appendChild(randomHeading);

    randomJokeBlockquote = document.createElement('blockquote');
    randomJokeBlockquote.innerHTML = `<em>Loading...</em>`;
    randomJokeSection.appendChild(randomJokeBlockquote);

    jokeContainer.appendChild(randomJokeSection);

    // Fetch jokes for both topics
    const justiceJokes = await fetchJokes('justice');
    const martialArtsJokes = await fetchJokes('martial arts');

    // Create and append joke sections
    jokeContainer.appendChild(
      createJokeSection('Jokes About Justice', justiceJokes)
    );
    jokeContainer.appendChild(document.createElement('hr'));
    jokeContainer.appendChild(
      createJokeSection('Jokes About Martial Arts', martialArtsJokes)
    );

    // Start polling for random jokes
    updateRandomJoke(); // Fetch the first joke immediately

     // Poll every 5 seconds
     // Fetch a new joke every 5 seconds if polling is on
    // setInterval(() => {
    //   if (isPolling) {
    //     updateRandomJoke();
    //   }
    // }, 5000);
  }

  // Function to update the random joke
  async function updateRandomJoke() {
    const newJoke = await fetchRandomJoke();
    randomJokeBlockquote.innerHTML = `<em>${newJoke}</em>`;
  }

  // Function to toggle polling
  function togglePolling() {
    isPolling = !isPolling; // Toggle the boolean value
    console.log(`Polling is now ${isPolling ? 'on' : 'off'}`); // Log the current state
  }

  loadJokes(); // Load jokes on page load

  // Optional: Call togglePolling to stop polling after a certain time for demonstration
  // setTimeout(togglePolling, 15000); // Example: Stop polling after 15 seconds
});
