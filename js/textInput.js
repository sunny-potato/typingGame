// import { playGame } from "./playGame.js";
import { calcuPoints } from "./pointsGauge.js";

const wordsContainer = document.querySelector(".wordsContainer");
const inputText = document.querySelector(".inputText");

export function inputWord() {
  inputText.addEventListener("input", (event) => {
    for (const element of wordsContainer.children) {
      if (
        inputText.value.trim().toLowerCase() ===
        element.textContent.toLowerCase()
        // trim() = remove whitespaces
      ) {
        wordsContainer.removeChild(element);
        calcuPoints();
        inputText.value = "";
      }
    }
  });
}

// function removeMatchingWords() {}
