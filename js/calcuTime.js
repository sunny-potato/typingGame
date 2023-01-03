import { isGameOver } from "./main.js";

let delayTime = 2300;

export function getStartTime() {
  const startTime = new Date().getTime();
  setTimeout(timeDifference, 1000, startTime);
}

export function timeDifference(startTime) {
  const currentTime = new Date().getTime();
  const playTime = currentTime - startTime;
  displayGameTime(playTime);
  const setOutTime = setTimeout(timeDifference, 1000, startTime);

  if (isGameOver) {
    defaultGameTime();
    clearTimeout(setOutTime);
  }
}

const displayTime = document.querySelector(".time");
export function defaultGameTime() {
  displayTime.innerHTML = "00:00";
}

function displayGameTime(playTime) {
  let diffMinute = Math.floor(playTime / 1000 / 60);
  let diffSecond = Math.floor(playTime / 1000);
  if (diffSecond >= 60) {
    diffSecond = diffSecond - 60 * diffMinute;
  }
  if (diffSecond < 10) {
    diffSecond = `0${diffSecond}`;
  }
  if (diffMinute < 10) {
    diffMinute = `0${diffMinute}`;
  }
  const sortedTime = `${diffMinute}:${diffSecond}`;
  displayTime.innerHTML = sortedTime;

  changeGameSpeed(diffMinute);
}

function changeGameSpeed(detectionMinute) {
  detectionMinute = Number(detectionMinute);
  if (detectionMinute === 1) {
    delayTime = 1900;
  } else if (detectionMinute === 2) {
    delayTime = 1400;
  } else if (detectionMinute === 3) {
    delayTime = 1100;
  } else if (detectionMinute >= 4) {
    delayTime = 700;
  }
  return delayTime;
}

export function getDelayTime() {
  const firstDelayTime = delayTime;
  const secondDelayTime = firstDelayTime / 20;
  const delayTimeArray = [firstDelayTime, secondDelayTime];
  return delayTimeArray;
}
