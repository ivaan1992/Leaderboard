const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export default {
  // POST
  game: `${baseUrl}/games`,
  // GET, POST
  scores: (id) => `${baseUrl}/games/${id}/scores`,

};