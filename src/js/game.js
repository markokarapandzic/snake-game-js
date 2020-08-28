import { getSnakeHead, snakeIntersection, update as updateSnake, paint as paintSnake, SNAKE_SPEED } from './snake.js';
import { update as updateFood, paint as paintFood } from './food.js';
import { outsideGrid } from './grid.js';
import { gameOverModal, mobileScreenModal } from './modal.js';
import { getScore } from './score.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (screen.width < 1140) {
    mobileScreenModal();
    return;
  }

  if (gameOver) {
    gameOverModal(getScore());
    return;
  }

  window.requestAnimationFrame(main); // Rerun the Main function
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  paint();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkForDeath();
}

function paint() {
  gameBoard.innerHTML = '';
  paintSnake(gameBoard);
  paintFood(gameBoard);
}

function checkForDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
