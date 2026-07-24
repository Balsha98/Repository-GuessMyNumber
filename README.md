# GuessMyNumber - Number Guessing Game

A browser-based number guessing game built as part of Jonas Schmedtmann's JavaScript course on Udemy. The player tries to guess a randomly generated secret number between 1 and 20, guided by hot and cold feedback after each attempt.

## Features

- **Random Secret Number** - A new number between 1 and 20 is generated at the start of every game.
- **Guess Feedback** - Each incorrect guess returns a "Too High" or "Too Low" hint.
- **Score Tracking** - The player starts with a score of 20 that decreases with every wrong guess.
- **Highscore System** - The best score across sessions is tracked and displayed throughout.
- **Win State** - A correct guess triggers a visual win state with the secret number revealed.
- **Again Button** - Resets the game with a new secret number while preserving the highscore.
- **Dynamic Styling** - The background color and number box width change on a correct guess.

## Demo

🔗 [Live Demo on Netlify](https://myguessmynumber.netlify.app/)

## Tech Stack

- **HTML5** - Structure & Content
- **CSS3** - Styling & Layout
- **JavaScript (ES6+)** - Game Logic & DOM Manipulation
- **Netlify** - Hosting & Deployment

## Course Reference

This project was built as part of:
📚 [The Complete JavaScript Course 2025 — Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Balsha98/Repository-GuessMyNumber.git
```

Navigate to the project directory:

```bash
cd Repository-GuessMyNumber/guess-my-number
```

Open the project in your browser:

```bash
# Simply open index.html in your preferred browser,
# or use a local server like Live Server in VS Code.
```

## Usage

1. **Enter a Guess**: Type a number between 1 and 20 into the input field.
2. **Check**: Click the "Check!" button to submit your guess and receive feedback.
3. **Follow the Hints**: Adjust your next guess based on the "Too High" or "Too Low" message.
4. **Win**: Match the secret number to trigger the win state and see your final score.
5. **Play Again**: Click "Again!" to start a new round — your highscore is preserved.

## Project Structure

```
Repository-GuessMyNumber/
│
├── guess-my-number/        # Main application directory.
│   │
│   ├── assets/             # Assets directory.
│   │   │
│   │   ├── css/            # Styling.
│   │   │
│   │   ├── javascript/     # Game logic.
│   │   │
│   │   └── media/          # Icons and UI assets.
│   │
│   └── index.html          # Main game page.
│
└── README.md               # Project documentation.
```

## How It Works

The game logic runs entirely in the browser with no backend:

- A secret number is generated once on page load using `Math.random()` and stored in a variable.
- On each guess submission, the input value is compared against the secret number and feedback is rendered to the DOM accordingly.
- The score decrements by 1 on every incorrect guess; reaching 0 ends the game in a loss.
- On a correct guess, the background color and number box width are updated directly via `document.querySelector().style` to produce the win state visual.
- The "Again!" button regenerates the secret number and resets all state variables and DOM elements, while leaving the highscore untouched if the new score would not surpass it.

## Let's Connect

If you enjoyed this project or have any questions, feel free to reach out!

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://bazovich.dev)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:balsa.bazovic@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/balsha-bazovic)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Balsha98)

⭐ If you found this project helpful, please consider giving it a star!

## License

Personal project - all rights reserved.
