import { wordsList } from "./listOfWords.js";
import { calcuGauge, sumPoints } from "./pointsGauge.js";
import { getDelayTime } from "./calcuTime.js";

const playContainer = document.querySelector(".playContainer");
const allWordContiner = document.querySelector(".wordsContainer");
const playArea = playContainer.getBoundingClientRect();

const setTimeoutArray = [];

export function playGame(onGameEnd) {
  const getWordandXpos = () => {
    const randomIndex = Math.floor(Math.random() * 1943);

    const minLengthWord = wordsList[randomIndex].length * 30; // 22pt = 29.333px
    const wordXposition =
      Math.random() * (playArea.width - minLengthWord) + minLengthWord;

    const textAlign = ["left", "right", "center"];
    const textAlignIndex = Math.floor(Math.random() * 3);
    const randomtextAlign = textAlign[textAlignIndex];
    const firstSetTimeout = setTimeout(getWordandXpos, getDelayTime()[0]);
    setTimeoutArray.push(firstSetTimeout);

    placeWordinXpos(randomIndex, wordXposition, randomtextAlign);
  };

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

    const secondSetTimeout = setTimeout(() => {
      wordMoveDown(wordFrame, initialYpos);
    }, getDelayTime()[1]);
  };

  const wordMoveDown = (lastWordinContainer, wordYpostion) => {
    const currentWord = lastWordinContainer;
    const currentWordPos = currentWord.getBoundingClientRect();
    wordYpostion += 5;
    currentWord.style.top = `${wordYpostion}px`;
    const thirdSetTimeout = setTimeout(() => {
      wordMoveDown(currentWord, wordYpostion);
    }, getDelayTime()[1]);

    if (currentWordPos.bottom >= playArea.bottom) {
      const gauge = calcuGauge();
      allWordContiner.removeChild(currentWord);
      if (gauge <= 0) {
        const finalPoints = sumPoints;
        onGameEnd(finalPoints);
        clearsetTimeOut();
      }
    }
  };
  const test = setTimeout(() => {
    getWordandXpos();
  }, 2300);
  return { getWordandXpos, placeWordinXpos, wordMoveDown, test };
}

function clearsetTimeOut() {
  for (const each of setTimeoutArray) {
    clearTimeout(each);
  }
}
