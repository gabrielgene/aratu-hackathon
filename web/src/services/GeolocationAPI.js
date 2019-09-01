const API_KEY = '8314335e1019d8';

export const getAdress = (lat, lng) => {
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${lat}&lon=${lng}&format=json`;

  return fetch(url).then(result => result.json());
};
