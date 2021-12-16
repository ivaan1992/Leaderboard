import './style.css';

class Score {
  constructor(name, score, index) {
    this.name = name;
    this.score = score;
    this.index = index;
  }

  addScore() {
    const makeList = document.getElementById('score');
    const makeUl = document.createElement('ul');
    makeList.appendChild(makeUl);
    makeUl.className = 'ulList';
    makeUl.innerHTML += `<li>${this.name} , ${this.score}</li>`;
  }
}
const score1 = new Score('Ivan', 100, 0);
const score2 = new Score('Ismael', 200, 1);

score1.addScore();
score2.addScore();
