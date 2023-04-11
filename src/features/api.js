const API_KEY = "9c9166f715ba46b6a9dbd9165c06ab10";
const API_URL = "https://news-proxy.netlify.app";

export const getTopHeadlines = async (country, sources = null) => {
  const url = sources
    ? `${API_URL}/api/top-headlines?sources=${sources}&apiKey=${API_KEY}`
    : `${API_URL}/api/top-headlines?country=${country}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getSources = async () => {
  const url = `${API_URL}/api/top-headlines/sources?apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const publishers = data.sources.map((source) => source.id);
  return publishers;
};

export const getEverything = async () => {
  const url = `${API_URL}/api/everything?q=everything&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
