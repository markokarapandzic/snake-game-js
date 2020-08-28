import { closeModal } from './modal.js';

const GO_UP = { x: 0, y: -1 };
const GO_DOWN = { x: 0, y: 1 };
const GO_LEFT = { x: -1, y: 0 };
const GO_RIGHT = { x: 1, y: 0 };

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) {
        break;
      }
      inputDirection = GO_UP;
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) {
        break;
      }
      inputDirection = GO_DOWN;
      break;
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) {
        break;
      }
      inputDirection = GO_LEFT;
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) {
        break;
      }
      inputDirection = GO_RIGHT;
      break;
    default:
      break;
  }

  closeModal();
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}