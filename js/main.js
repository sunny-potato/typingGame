import { calcuPoints, calcuGauge } from "./pointsGauge.js";
import { playGame } from "./playGame.js";
import { inputWord } from "./textInput.js";
import { getStartTime, defaultGameTime } from "./calcuTime.js";

export let isGameOver = false;
calcuPoints(0);
calcuGauge(10);
defaultGameTime();

// Start game
const startButton = document.querySelector(".startButton");
const noticeStartGame = document.querySelector(".noticeStartGame");

startGame();
function startGame() {
  startButton.addEventListener("click", () => {
    noticeStartGame.style.visibility = "hidden";
    // console.log("game start");
    const inputText = document.querySelector(".inputText");
    inputText.value = "";
    inputText.focus();
    const hahah = getStartTime();
    playGame((finalPoints) => {
      // console.log("game over");
      gameOver(finalPoints);
      isGameOver = true;
    });
  });
}
inputWord();

// End game
const noticeEndGame = document.querySelector(".noticeEndGame");
function gameOver(finalPoints) {
  const allWordContiner = document.querySelector(".wordsContainer");
  while (allWordContiner.firstChild) {
    allWordContiner.removeChild(allWordContiner.firstChild);
  }

  noticeEndGame.style.visibility = "visible";
  const finalScore = document.querySelector(".finalScore");
  finalScore.textContent = `${finalPoints}`;
  // visibility="visible" vs dispaly="none"
  // -> hold place           -> hold ikke place when it works.
}
goToStart();
function goToStart() {
  const closeButton = document.querySelector(".closeButton");
  closeButton.addEventListener("click", () => {
    noticeEndGame.style.visibility = "hidden";
    noticeStartGame.style.visibility = "visible";
    calcuPoints(0);
    calcuGauge(10);
  });
}
