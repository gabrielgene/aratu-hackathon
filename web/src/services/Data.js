const host = 'aratu-server.gabrielgene.now.sh'

export function getTwitterAmount() {
  return fetch(`http://${host}/api/twitter.js`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export function getUserAmount() {
  return fetch(`http://${host}/api/user.js`, {
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
  return fetch(`http://${host}/api/location.js`, {
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
  return fetch(`http://${host}/api/twitterUsers.js`, {
    method: 'GET',
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}
