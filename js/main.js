import { calcuPoints, calcuGauge } from "./pointsGauge.js";
import { playGame } from "./playGame.js";
import { inputWord } from "./textInput.js";

calcuPoints(0);
calcuGauge(10);

// Start game
const startButton = document.querySelector(".startButton");
const noticeStartGame = document.querySelector(".noticeStartGame");

startGame();
function startGame() {
  startButton.addEventListener("click", () => {
    noticeStartGame.style.visibility = "hidden";
    console.log("game start");
    const inputText = document.querySelector(".inputText");
    inputText.value = "";
    inputText.focus();
    playGame((finalPoints) => {
      console.log("game over");
      gameOver(finalPoints);
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

  noticeEndGame.style.display = "block";
  const finalScore = document.querySelector(".finalScore");
  finalScore.textContent = `${finalPoints}`;
  // visibility="visible" vs dispaly="none"
  // -> hold place           -> hold ikke place when it works.
}

goToStart();
function goToStart() {
  const goToStartButton = document.querySelector(".goToStartButton");
  goToStartButton.addEventListener("click", () => {
    noticeEndGame.style.display = "none";
    noticeStartGame.style.visibility = "visible";
    calcuPoints(0);
    calcuGauge(10);
  });
}
