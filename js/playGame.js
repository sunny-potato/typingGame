import { wordsList } from "./listOfWords.js";
import { calcuGauge } from "./pointsGauge.js";

const playContainer = document.querySelector(".playContainer");
const allWordContiner = document.querySelector(".wordsContainer");
const playArea = playContainer.getBoundingClientRect();

export function playGame() {
  const getWordandXpos = () => {
    const randomIndex = Math.floor(Math.random() * 1943);

    const minLengthWord = wordsList[randomIndex].length * 24; // 18pt = 24px
    const wordXposition =
      Math.random() * (playArea.width - minLengthWord) + minLengthWord;

    const textAlign = ["start", "end", "center"];
    const textAlignIndex = Math.floor(Math.random() * 3);
    const randomtextAlign = textAlign[textAlignIndex];

    placeWordinXpos(randomIndex, wordXposition, randomtextAlign);
  };

  let speedLevel = [2000, 1500, 1000, 500];
  let delayTime = 200;
  let intervalTime = 3 * delayTime;

  const placeWordinXpos = (randomIndex, wordXposition, randomtextAlign) => {
    const wordFrame = document.createElement("div");
    wordFrame.textContent = `${wordsList[randomIndex]}`;
    wordFrame.style.width = `${wordXposition}px`;
    wordFrame.style.textAlign = `${randomtextAlign}`;
    wordFrame.style.position = "absolute";
    // wordFrame.style.background = "red";

    allWordContiner.appendChild(wordFrame);
    const initialYpos = 0;
    setTimeout(() => {
      wordMoveDown(wordFrame, initialYpos);
    }, delayTime);
  };
  const wordMoveDown = (lastWordinContainer, wordYpostion) => {
    const currentWord = lastWordinContainer;
    const currentWordPos = currentWord.getBoundingClientRect();
    // console.log(currentWord.className === "noticeGame");
    if (currentWordPos.bottom >= playArea.bottom) {
      // console.log(currentWord.textContent);
      if (currentWord.className === "noticeGame") {
        return; // game done
      }
      clearTimeout(currentWord);
      allWordContiner.removeChild(currentWord);
      calcuGauge();
    } else {
      wordYpostion += 5;
      currentWord.style.top = `${wordYpostion}px`;
      setTimeout(() => {
        wordMoveDown(currentWord, wordYpostion);
      }, delayTime);
    }
  };

  setInterval(getWordandXpos, intervalTime);
}
