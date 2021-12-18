import './style.css';
import toastr from 'toastr';
import routes from './routes.js';
import request from './fetch.js';

const refresh = document.querySelector('.refresh-button');
const score = document.querySelector('.score-submit-button');
const game = document.querySelector('#game');
let gameID;

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

game.addEventListener('click', async (e) => {
  e.preventDefault();
  const gameForm = document.querySelector('#game');
  const name = document.querySelector('.game-name').value;
  const response = await request(routes.game, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
  const { result } = await response.json();
  gameID = result.split(' ').find((str, index) => index === 3);
  gameForm.remove();

  toastr.success(result);
});

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const ul = document.querySelector('#score-list');
  if (gameID == null) return;

  const response = await request(routes.scores(gameID), {
    method: 'GET',
  });
  const { result } = await response.json();
  const scoresHTML = result.map(({ user, score }) => `
        <li class="user">
            ${user} ${score}
        </li>
    `).join('');

  ul.innerHTML = scoresHTML;
});

score.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = document.querySelector('#input-name').value;
  const score = document.querySelector('#input-score').value;

  const response = await request(routes.scores(gameID), {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
  });
  const { result } = await response.json();
  toastr.success(result);
});
