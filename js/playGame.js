import { wordsList } from "./listOfWords.js";
import { calcuGauge } from "./pointsGauge.js";
import { gameOver } from "./startEndGame.js";

const playContainer = document.querySelector(".playContainer");
const allWordContiner = document.querySelector(".wordsContainer");
const playArea = playContainer.getBoundingClientRect();

export function playGame(onGameEnd) {
  const getWordandXpos = () => {
    const randomIndex = Math.floor(Math.random() * 1943);

    const minLengthWord = wordsList[randomIndex].length * 24; // 18pt = 24px
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
    // wordFrame.textContent = `${wordsList[randomIndex]}`;
    wordFrame.style.width = `${wordXposition}px`;
    wordFrame.style.textAlign = `${randomtextAlign}`;
    wordFrame.style.position = "absolute";

    wordFrame.appendChild(wordSpan);

    allWordContiner.appendChild(wordFrame);
    const initialYpos = 0;
    const EachWordSetTimeout = setTimeout(() => {
      wordMoveDown(wordFrame, initialYpos);
    }, delayTime);
    return EachWordSetTimeout;
  };

  const wordMoveDown = (lastWordinContainer, wordYpostion) => {
    const currentWord = lastWordinContainer;
    const currentWordPos = currentWord.getBoundingClientRect();
    // console.log(currentWord.className === "noticeGame");
    if (currentWordPos.bottom >= playArea.bottom) {
      // console.log(currentWord.textContent);
      // clearTimeout(currentWord);
      allWordContiner.removeChild(currentWord);
      const gauge = calcuGauge();
      if (gauge <= 0) {
        onGameEnd();
      }
    } else {
      wordYpostion += 5;
      currentWord.style.top = `${wordYpostion}px`;
      setTimeout(() => {
        wordMoveDown(currentWord, wordYpostion);
      }, delayTime);
    }
  };

  const newWordSetInterval = setInterval(getWordandXpos, intervalTime);

  return { getWordandXpos, placeWordinXpos, wordMoveDown, newWordSetInterval };
}
