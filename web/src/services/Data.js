const host = 'aratu-server.gabrielgene.now.sh';

export function getTwitterAmount() {
  return fetch(`https://${host}/api/twitter.js`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export function getUserAmount() {
  return fetch(`https://${host}/api/user.js`, {
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
  return fetch(`https://${host}/api/location.js`, {
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
  return fetch(`https://${host}/api/twitterUsers.js`, {
    method: 'GET',
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}
