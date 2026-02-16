"use strict";
function isNumber(char) {
  return /^[0-9]$/.test(char);
}
let randomNumber = Math.trunc(Math.random() * 20) + 1; //    This generates a decimal number in the range [0,20)[0,20)
// (meaning it can be 0 but will always be less than 20).
// Minimum: 0×20=00×20=0
// Maximum (approaching): 0.999...×20≈19.999...0.999...×20≈19.999...
// This shifts the range from 0-19 to 1-20.;
console.log(`Random number is ${randomNumber}`);
const body = document.querySelector("body");
const bigBox = document.querySelector(".box");
bigBox.textContent = "?";
const score = document.getElementById("score");
const messageShown = document.querySelector(".message");
const highScore = document.getElementById("highscore");
const check = document.querySelector(".small");
const messageFunction = function (message) {
  messageShown.textContent = message;
  return;
};
const everything = function () {
  const guess = Number(input.value);
  const scoreNumber = Number(score.textContent);
  const highScoreNumber = Number(highScore.textContent);
  const diff = Math.abs(guess - randomNumber);
  // returns the absolute value of a number.
  if (randomNumber === guess) {
    messageFunction("🎉 Correct Number!");
    body.style.backgroundColor = "Green";
    bigBox.textContent = randomNumber;
    score.textContent = scoreNumber;
    bigBox.style.backgroundColor = "lightgray";
    bigBox.style.width = "300px";
     highScore.textContent = scoreNumber;
    input.ReadOnly = true;
        if (scoreNumber > highScoreNumber) {
          highScore.textContent = scoreNumber;
        }
  } else if (guess > randomNumber) {
    if (diff <= 2) {
      messageFunction("🔥 So close!");
    } else if (diff <= 4) {
      messageFunction("🤏🏻 You're close!");
    } else if (diff <= 6) {
      messageFunction("🥴 A bit high!");
    } else {
      messageFunction("📉 Too high!");
    }
  } else if (guess < randomNumber) {
    if (diff <= 2) {
      messageFunction("🔥 So close!");
    } else if (diff <= 4) {
      messageFunction("🤏🏻 You're close!");
    } else if (diff <= 6) {
      messageFunction("🥴 A bit low!");
    } else {
      messageFunction("📈 Too low!");
    }
  }
  if (randomNumber !== guess) {
    body.style.backgroundColor = "Black";

    score.textContent = scoreNumber - 1;
  }
  if (!guess) {
    messageFunction("⛔️ No number!");
  }
  if (scoreNumber <= 1) {
    messageFunction("💥 You lose!");
    score.textContent = "0";
    body.style.backgroundColor = "#ff2c2c";
  }

  return;
};
check.addEventListener("click", function () {
  everything();
});
const input = document.querySelector(".input");
input.addEventListener("input", function () {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Backcpace") {
    return;
  }
  if (event.key === "Enter") {
    everything();
    return;
  }
  if (
    event.key !== "Backspace" &&
    event.key !== "Enter" &&
    !isNumber(event.key)
  ) {
    event.preventDefault();
  }
});

const again = document.querySelector(".button");
again.addEventListener("click", function () {
  body.style.backgroundColor = "Black";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Random number is ${randomNumber}`);
  bigBox.textContent = "?";
  input.value = "";
  score.textContent = "20";
  input.ReadOnly = false;
   bigBox.style.width = "196px";
   messageFunction("Start guessing...")
})
// use more functions instead of repeating
