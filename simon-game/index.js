var gameStarted = false;
var gameOver = false;
const buttons = document.querySelectorAll(".btn");
const levelTitle = document.querySelector("#level-title");
const body = document.querySelector("body");
const score = document.querySelector("#score");
var levelNumber = 1;
var correctSequence = [];
var userSequence = [];
var shouldRestart = false;
var difficulty = 5 * 100;

window.onkeydown = function () {
  if (shouldRestart) {
    reset();
  }
  if (!gameStarted) {
    gameStarted = true;
    console.log("game started");
    levelTitle.textContent = "Level " + levelNumber;

    var randomButton = createRandomButton(buttons);
    correctSequence.push(randomButton);
    debug();
    flashButton(randomButton);
  }
};

buttons.forEach(function (button) {
  button.onclick = function () {
    if (!gameOver) {
      userSequence.push(button);
      flashButton(button);
      glowButton(button);
      if (!checkCorrectness()) {
        shoutGameOver();
        gameOver = true;

        shouldRestart = true;
      } else if (userSequence.length === correctSequence.length) {
        score.textContent = "Your Score: " + levelNumber.toString();
        levelTitle.textContent = "Level " + ++levelNumber;
        var randomButton = createRandomButton(buttons);
        correctSequence.push(randomButton);
        debug();
        setTimeout(function () {
          flashButton(randomButton);
        }, difficulty);
        userSequence = [];
      }
    }
  };
});

function checkCorrectness() {
  for (var i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== correctSequence[i]) return false;
  }

  return true;
}

function debug() {
  console.log("user: ");
  console.log(userSequence);
  console.log("correct: ");
  console.log(correctSequence);
}

function createRandomButton(btns) {
  return btns[Math.floor(Math.random() * 4)];
}

function flashButton(button) {
  setTimeout(function () {
    button.style.opacity = 0;
    const audio = new Audio("sounds/" + button.id + ".mp3");
    audio.play();
  }, 10);

  setTimeout(function () {
    button.style.opacity = 1;
  }, 100);
}

function glowButton(button) {
  setTimeout(function () {
    button.style.boxShadow = "0 0 50px white";
  }, 10);

  setTimeout(function () {
    button.style.boxShadow = "0 0 0 0";
  }, 100);
}

function shoutGameOver() {
  const audio = new Audio("sounds/wrong.mp3");
  audio.play();
  animateFlash(body, "red");
  levelTitle.innerHTML = "Game Over. <br> Press any key to restart game.";
}

function animateFlash(element, color) {
  const originalColor = element.style.backgroundColor;
  setTimeout(function () {
    element.style.backgroundColor = color;
  }, 10);

  setTimeout(function () {
    element.style.backgroundColor = originalColor;
  }, 100);
}

function reset() {
  levelNumber = 1;
  correctSequence = [];
  userSequence = [];
  gameStarted = false;
  gameOver = false;
  shouldRestart = false;
  score.textContent = "Your Score: 0";
}
