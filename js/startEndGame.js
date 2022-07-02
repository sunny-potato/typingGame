import { playGame } from "./playGame.js";

const startButton = document.querySelector(".startButton");
const noticeGame = document.querySelector(".noticeGame");
export function startGame() {
  startButton.addEventListener("click", () => {
    noticeGame.style.visibility = "hidden";
    playGame();
  });
}

export function gameOver() {
  // pop up message with total sum
}
