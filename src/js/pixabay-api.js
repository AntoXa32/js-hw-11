const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43780784-35e4285ec8f2021d0fe97b31d';

export const fetchPhotosByQuery = (q = 'photo') => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
