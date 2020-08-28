const scoreModal = document.querySelector('.modal-score-overlay');
const scoreModalContent = document.querySelector('.modal-score-container');
let score = 0;

export function openModal() {
  scoreModal.classList.add('score-modal-open');
}

export function addScore(number) {
  score += number;
  scoreModalContent.innerHTML = `<h1>${score}</h1>`;
}

export function getScore() {
  return score;
}
