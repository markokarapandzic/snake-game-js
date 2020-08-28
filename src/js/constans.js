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