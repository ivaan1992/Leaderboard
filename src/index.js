import './style.css';

const ID = 'Zl4d7IVkemOTTVg2fUdz';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/`;
const refresh = document.getElementById('refresh');
const scores = document.getElementById('score');
const name = document.getElementById('input-name');
const Score = document.getElementById('input-score');
const API = document.getElementById('submit');

const transformData = (data) => {
    data.forEach((result) => {
        const { user, score } = result;
        const tr = document.createElement('tr');
        const TName = document.createElement('td');
        const TScore = document.createElement('td');
        TName.scope = 'row';
        TScore.scope = 'row';

        TName.innerHTML = user;
        TScore.innerHTML = score;

        scores.appendChild(tr);
        tr.appendChild(TName);
        tr.appendChild(TScore);
    });
};

const getScore = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const { result } = data;
        transformData(result);
    } catch (error) {
        throw new Error ('Please check the API');
    }
};

const postRequest = async () => {
    if(name.value && Score.value) {
        try {
            await fetch(URL, {
              method: 'POST',
              body: JSON.stringify({
                user: name.value,
                score: Score.value,
              }),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
            });
            Score.value = '';
            name.value = '';
            window.location.reload();
        } catch (error) {
            throw new Error('Please check POST API Method');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    getScore();
});

API.addEventListener('click', postRequest);

refresh.addEventListener('click', () => {
    window.location.reload();
});