export let sumPoints;
export function calcuPoints(initialPoint) {
  if (initialPoint === undefined) {
    sumPoints += 5;
  } else {
    sumPoints = initialPoint;
  }
  displayPoints(sumPoints);
  return sumPoints;
}

function displayPoints(sumPoints) {
  const points = document.querySelector(".points");
  return (points.innerHTML = `${sumPoints}`);
}

let currentGauge;
export function calcuGauge(initialGauge) {
  if (initialGauge === undefined) {
    currentGauge -= 2;
  } else {
    currentGauge = initialGauge;
  }
  displayGauge(currentGauge);
  return currentGauge;
}

export function displayGauge(currentGauge) {
  const gauge = document.querySelector(".gauge");
  gauge.innerHTML = `${currentGauge}`;
}
