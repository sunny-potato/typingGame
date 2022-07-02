import { startGame } from "./startEndGame.js";
import { calcuPoints, calcuGauge } from "./pointsGauge.js";

const displayPoins = calcuPoints();
const displayGauge = calcuGauge();
startGame();
