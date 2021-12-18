export default (url, { method, body }) => (fetch(url, {
  method,
  headers: {
    'Content-Type': 'application/json',
  },
  body,
}));
