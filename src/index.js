import './style.css';

class Score {
  constructor(name, score, index) {
    this.name = name;
    this.score = score;
    this.index = index;
  }
}
const addScore = ({ name, score }) => {
  const addListScore = document.getElementById('score');
  const makeUl = document.createElement('ul');
  addListScore.appendChild(makeUl);
  makeUl.className = 'ulList';
  makeUl.innerHTML += `<li>${name} , ${score}</li>`;
};

const score1 = new Score('Ivan', 100, 0);
const score2 = new Score('Ismael', 200, 1);

addScore(score1);
addScore(score2);
