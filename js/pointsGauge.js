// import { gameOver } from "./startEndGame.js";

let sumPoints;
const points = document.querySelector(".points");
export function calcuPoints() {
  if (sumPoints === undefined) {
    sumPoints = 0;
  } else {
    sumPoints += 5;
  }
  points.innerHTML = `${sumPoints}`;
}

let currentGauge;
const gauge = document.querySelector(".gauge");
export function calcuGauge() {
  // emptyGauge(currentGauge);
  if (currentGauge === undefined) {
    currentGauge = 10;
  } else {
    currentGauge -= 2;
  }
  gauge.innerHTML = `${currentGauge}`;
  return currentGauge;
}
