import { onSnake, expandSnake } from './snake.js';
import { getRandomGridPosition } from './grid.js';
import { addScore } from './score.js';

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;
const POINTS = 100;

export function update() {
  if (onSnake(food)) {
    addScore(POINTS);
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function paint(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');

  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition();
  }

  return newFoodPosition;
}
