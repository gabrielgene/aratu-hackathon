const API_URL = '';

export function sendUserData(userData) {
  return fetch(API_URL, {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(response => response.json());
}
