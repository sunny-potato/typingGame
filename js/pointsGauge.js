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
  emptyGauge(currentGauge);
  if (currentGauge === undefined) {
    currentGauge = 100;
  } else {
    currentGauge -= 2;
  }
  gauge.innerHTML = `${currentGauge}`;
}

export function emptyGauge(currentGauge) {
  if (currentGauge === 0) {
    return alert("Done");
  }
}
