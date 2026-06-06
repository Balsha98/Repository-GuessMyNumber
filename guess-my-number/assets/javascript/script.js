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

myTagSelector("#check_btn").addEventListener("click", function () {
    const userGuess = Number(myTagSelector("#num_input").value);

    if (!userGuess) {
        tagTextChange("#intro_txt", "👀 Number needed...");
    } else if (userGuess === randomNum) {
        tagTextChange("h1", "YOU GUESSED IT!");

        myTagSelector("#revealing_div").style.minWidth = "250px";
        tagTextChange("#revealing_div", randomNum);

        tagTextChange("#intro_txt", "🎉 Correct Number!");

        let highScore = Number(getText("#high_score"));
        if (highScore < userScore) {
            tagTextChange("#high_score", userScore);
        }

        myTagSelector("body").style.backgroundColor = greenBG;
    } else if (userGuess !== randomNum) {
        if (userScore > 0) {
            // Great suggestion by Jonas, using the Ternary Operator!
            const lowHigh = userGuess < randomNum ? "📉 Too Low!" : "📈 Too High!";
            tagTextChange("#intro_txt", lowHigh);

            tagTextChange("#score", --userScore);

            if (userScore === 0) {
                myTagSelector("body").style.backgroundColor = redBG;

                tagTextChange("h1", "GAME OVER!");

                tagTextChange("#intro_txt", "😭 No Guesses Left!");
            }
        }
    }
});

myTagSelector("#again_btn").addEventListener("click", function () {
    myTagSelector("body").style.backgroundColor = blackBG;

    tagTextChange("h1", "Guess My Number!");

    randomNum = Math.trunc(Math.random() * 20) + 1;
    myTagSelector("#revealing_div").style.minWidth = "120px";
    tagTextChange("#revealing_div", "?");

    tagTextChange("#intro_txt", "🤔 Start guessing...");

    userScore = 20;
    tagTextChange("#score", userScore);

    myTagSelector("#num_input").value = "";
});
