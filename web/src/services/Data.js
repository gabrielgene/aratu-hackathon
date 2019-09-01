export function getTwitterAmount() {
  return fetch('http://localhost:3000/api/twitter.js', {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export function getUserAmount() {
  return fetch('http://localhost:3000/api/user.js', {
    method: 'GET',
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export function getLocations() {
  return fetch('http://localhost:3000/api/location.js', {
    method: 'GET',
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export function getTwitters() {
  return fetch('http://localhost:3000/api/twitterUsers.js', {
    method: 'GET',
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}
