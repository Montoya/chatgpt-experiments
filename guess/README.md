# Guessing Game

> Give me the code for a simple guessing game played in the browser

Here is an example of a simple guessing game that can be played in a web browser:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Guessing Game</title>

    <style>
      /* Some basic styling for the page */

      body {
        font-family: sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 20px;
      }

      h1 {
        text-align: center;
        margin-bottom: 30px;
      }

      input[type="number"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid #333;
        border-radius: 4px;
        font-size: 16px;
      }

      button {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <h1>Guessing Game</h1>

    <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>

    <form>
      <label for="guess">Your guess:</label>
      <input type="number" id="guess" min="1" max="100" required />
      <button type="submit">Guess</button>
    </form>

    <script>
      // Generate a random number between 1 and 100
      const secretNumber = Math.floor(Math.random() * 100) + 1;

      // Get a reference to the form and input elements
      const form = document.querySelector('form');
      const input = document.querySelector('input');

      // Add an event listener to the form to handle the submit event
      form.addEventListener('submit', e => {
        // Prevent the form from submitting
        e.preventDefault();

        // Get the value of the input element
        const guess = parseInt(input.value, 10);

        // Check if the guess is correct
        if (guess === secretNumber) {
          // If the guess is correct, show a message and reset the form
          alert('You guessed it! The secret number was ' + secretNumber);
          form.reset();
        } else {
```

> Show the JavaScript snippet in the previous example

Here is the JavaScript snippet from the previous example:

```JavaScript
// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Get a reference to the form and input elements
const form = document.querySelector('form');
const input = document.querySelector('input');

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', e => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the value of the input element
  const guess = parseInt(input.value, 10);

  // Check if the guess is correct
  if (guess === secretNumber) {
    // If the guess is correct, show a message and reset the form
    alert('You guessed it! The secret number was ' + secretNumber);
    form.reset();
  } else {
    // If the guess is incorrect, show a message and clear the input
    alert('Sorry, that is not correct. Please try again.');
    input.value = '';
  }
});
```

> Update the previous JavaScript snippet to give the user a hint when they guess and show me just the JavaScript snippet

Here is an updated version of the JavaScript snippet that gives the user a hint when they guess:

```JavaScript
// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Get a reference to the form and input elements
const form = document.querySelector('form');
const input = document.querySelector('input');

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', e => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the value of the input element
  const guess = parseInt(input.value, 10);

  // Check if the guess is correct
  if (guess === secretNumber) {
    // If the guess is correct, show a message and reset the form
    alert('You guessed it! The secret number was ' + secretNumber);
    form.reset();
  } else {
    // If the guess is incorrect, show a hint and clear the input
    if (guess > secretNumber) {
      alert('Sorry, that is not correct. Your guess is too high. Please try again.');
    } else {
      alert('Sorry, that is not correct. Your guess is too low. Please try again.');
    }
    input.value = '';
  }
});
```

> Update the previous JavaScript snippet to reset the secret number when they get it right and show me just the JavaScript snippet

Here is an updated version of the JavaScript snippet that resets the secret number when the user guesses it correctly:

```JavaScript
// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Get a reference to the form and input elements
const form = document.querySelector('form');
const input = document.querySelector('input');

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', e => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the value of the input element
  const guess = parseInt(input.value, 10);

  // Check if the guess is correct
  if (guess === secretNumber) {
    // If the guess is correct, show a message and reset the form
    alert('You guessed it! The secret number was ' + secretNumber);
    form.reset();

    // Generate a new secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;
  } else {
    // If the guess is incorrect, show a hint and clear the input
    if (guess > secretNumber) {
      alert('Sorry, that is not correct. Your guess is too high. Please try again.');
    } else {
      alert('Sorry, that is not correct. Your guess is too low. Please try again.');
    }
    input.value = '';
  }
});
```