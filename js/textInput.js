import { playGame } from "./playGame.js";
import { calcuPoints } from "./pointsGauge.js";

const wordsContainer = document.querySelector(".wordsContainer");
const inputText = document.querySelector(".inputText");
inputText.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    Array.from(wordsContainer.children).find((each, index) => {
      if (inputText.value === each.textContent) {
        wordsContainer.removeChild(each);
        calcuPoints();
        // inputText.value = "";
      }
    });
    // inputText.value = "";
  }
});
