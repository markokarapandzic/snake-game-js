import { openModal as openScoreModal } from './score.js'
import { restartModalHtml, MOBILE_SCREEN_MODAL_HTML } from './constans.js'

const modal = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-container');
const btnStart = document.querySelector('.btn-start');

export function closeModal() {
  modal.classList.remove('open-modal');
  openScoreModal();
}

export function openModal() {
  modal.classList.add('open-modal');
}

export function gameOverModal(score) {
  modalContent.innerHTML = restartModalHtml(score);
  openModal();

  const btnRestart = document.querySelector('.btn-restart');
  btnRestart.addEventListener('click', () => {
    window.location = '/';
  });
}

btnStart.addEventListener('click', () => {
  closeModal();
});

export function mobileScreenModal() {
  modalContent.innerHTML = MOBILE_SCREEN_MODAL_HTML;
}
