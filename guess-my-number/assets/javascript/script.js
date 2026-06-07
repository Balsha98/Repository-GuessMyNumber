"use strict";

// CONSTANTS
const blackBG = "rgb(22, 22, 22)";
const greenBG = "rgb(82, 230, 90)";
const redBG = "rgb(239, 82, 82)";

// REPEATING FUNCTIONS
const myTagSelector = (tagName) => {
  return document.querySelector(tagName);
};

const tagTextChange = (tagName, newText) => {
  document.querySelector(tagName).textContent = newText;
};

const getText = (tagName) => {
  return document.querySelector(tagName).textContent;
};

// GLOBAL ATTRIBUTES
let randomNum = Math.trunc(Math.random() * 20) + 1;
let userScore = Number(getText("#score"));

myTagSelector("#check-btn").addEventListener("click", function () {
  const userGuess = Number(myTagSelector("#num-input").value);

  if (!userGuess) {
    tagTextChange("#intro-txt", "👀 Number needed...");
  } else if (userGuess === randomNum) {
    tagTextChange("h1", "YOU GUESSED IT!");

    myTagSelector("#revealing-div").style.minWidth = "250px";
    tagTextChange("#revealing-div", randomNum);

    tagTextChange("#intro-txt", "🎉 Correct Number!");

    let highScore = Number(getText("#high-score"));
    if (highScore < userScore) {
      tagTextChange("#high-score", userScore);
    }

    myTagSelector("body").style.backgroundColor = greenBG;
  } else if (userGuess !== randomNum) {
    if (userScore > 0) {
      // Great suggestion by Jonas, using the Ternary Operator!
      const lowHigh = userGuess < randomNum ? "📉 Too Low!" : "📈 Too High!";
      tagTextChange("#intro-txt", lowHigh);

      tagTextChange("#score", --userScore);

      if (userScore === 0) {
        myTagSelector("body").style.backgroundColor = redBG;

        tagTextChange("h1", "GAME OVER!");

        tagTextChange("#intro-txt", "😭 No Guesses Left!");
      }
    }
  }
});

myTagSelector("#again-btn").addEventListener("click", function () {
  myTagSelector("body").style.backgroundColor = blackBG;

  tagTextChange("h1", "Guess My Number!");

  randomNum = Math.trunc(Math.random() * 20) + 1;
  myTagSelector("#revealing-div").style.minWidth = "120px";
  tagTextChange("#revealing-div", "?");

  tagTextChange("#intro-txt", "🤔 Start guessing...");

  userScore = 20;
  tagTextChange("#score", userScore);

  myTagSelector("#num-input").value = "";
});
