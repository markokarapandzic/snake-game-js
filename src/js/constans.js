export const restartModalHtml = (score) => `
<h1>You Lost</h1>
<div class="result">
  <h4>Score</h4>
  <h2>${score}</h2>
</div>
<h3>Click restart to start again.</h3>
<div class="game-btns">
  <button class="btn-restart">Restart</button>
</div>
`;

export const MOBILE_SCREEN_MODAL_HTML = `
<h1>Snake Game</h1>
<h4>You cannot play this game on Mobile and Tablet Screens.</h4>
`;