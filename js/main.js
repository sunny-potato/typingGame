import { gameOver } from "./startEndGame.js";
import { calcuPoints, calcuGauge } from "./pointsGauge.js";
import { playGame } from "./playGame.js";
import { inputWord } from "./textInput.js";

// setting startcondition
const displayPoins = calcuPoints();
const displayGauge = calcuGauge();

// start game
const startButton = document.querySelector(".startButton");
const noticeGame = document.querySelector(".noticeGame");
const gameState = startGame();
function startGame() {
  startButton.addEventListener("click", () => {
    noticeGame.style.visibility = "hidden";
    playGame(() => {
      console.log("Game is over!");
      gameOver();
    });
  });
}

inputWord();

// console.log(playGame().wordMoveDown());

// game over
console.log(displayGauge);
if (displayGauge <= 0) {
  clearInterval(gameState);
  clearTimeout(gameState);
  gameOver();
}
// console.log(displayGauge, emptyGauge(displayGauge));
function emptyGauge(displayGauge) {
  if (displayGauge <= 0) {
    clearInterval(gameState);
    clearTimeout(gameState);
    gameOver();
  }
}
