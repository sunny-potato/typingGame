import { wordsList } from "./listOfWords.js";
import { calcuGauge, sumPoints } from "./pointsGauge.js";

const playContainer = document.querySelector(".playContainer");
const allWordContiner = document.querySelector(".wordsContainer");
const playArea = playContainer.getBoundingClientRect();

export function playGame(onGameEnd) {
  const getWordandXpos = () => {
    const randomIndex = Math.floor(Math.random() * 1943);

    const minLengthWord = wordsList[randomIndex].length * 30; // 22pt = 29.333px
    const wordXposition =
      Math.random() * (playArea.width - minLengthWord) + minLengthWord;

    const textAlign = ["left", "right", "center"];
    const textAlignIndex = Math.floor(Math.random() * 3);
    const randomtextAlign = textAlign[textAlignIndex];

    placeWordinXpos(randomIndex, wordXposition, randomtextAlign);
  };

  let speedLevel = [2000, 1500, 1000, 500];
  let intervalTime = 1000;
  let delayTime = intervalTime / 20;

  const placeWordinXpos = (randomIndex, wordXposition, randomtextAlign) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = `${wordsList[randomIndex]}`;

    const wordFrame = document.createElement("div");
    wordFrame.style.width = `${wordXposition}px`;
    wordFrame.style.textAlign = `${randomtextAlign}`;
    wordFrame.style.position = "absolute";

    wordFrame.appendChild(wordSpan);

    allWordContiner.appendChild(wordFrame);
    const initialYpos = 0;
    const fisrtSetTimeout = setTimeout(() => {
      wordMoveDown(wordFrame, initialYpos, fisrtSetTimeout);
    }, delayTime);
  };

  const wordMoveDown = (lastWordinContainer, wordYpostion, fisrtSetTimeout) => {
    const currentWord = lastWordinContainer;
    const currentWordPos = currentWord.getBoundingClientRect();
    wordYpostion += 5;
    currentWord.style.top = `${wordYpostion}px`;
    const secondSetTimeout = setTimeout(() => {
      wordMoveDown(currentWord, wordYpostion);
    }, delayTime);
    if (currentWordPos.bottom >= playArea.bottom) {
      const gauge = calcuGauge();
      allWordContiner.removeChild(currentWord);
      if (gauge <= 0) {
        // console.log("2settimeout", secondSetTimeout); // Q to S!
        const finalPoints = sumPoints;
        onGameEnd(finalPoints);
        clearInterval(newWordSetInterval);
        clearTimeout(fisrtSetTimeout);
        clearTimeout(secondSetTimeout);
      }
    }
  };

  const newWordSetInterval = setInterval(getWordandXpos, intervalTime);

  return { getWordandXpos, placeWordinXpos, wordMoveDown, newWordSetInterval };
}
