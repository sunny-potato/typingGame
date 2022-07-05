// import { playGame } from "./playGame.js";
import { calcuGauge } from "./pointsGauge.js";

export function gameOver() {
  const allWordContiner = document.querySelector(".wordsContainer");
  while (allWordContiner.firstChild) {
    allWordContiner.removeChild(allWordContiner.firstChild);
  }

  noticeGame.style.visibility = "visible";
}
