const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://www.googleapis.com/books/v1"

export const searchBooks = async (query) => {
  const res = await fetch(
    `${BASE_URL}/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items;
};

export const getFeaturedBooks = async () => {
  const res = await fetch(
    `${BASE_URL}/volumes?q=subject:"Young Adult Fiction"&orderBy=newest&maxResults=20&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items;
};
