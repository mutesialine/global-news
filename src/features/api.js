const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://news-proxy.netlify.app/api";

export const getTopHeadlines = async (country, sources = null) => {
  const url = sources
    ? `${API_URL}/top-headlines?sources=${sources}&apiKey=${API_KEY}&pageSize=10`
    : `${API_URL}/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=10`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getSources = async () => {
  const url = `${API_URL}/top-headlines/sources?apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const publishers = data.sources.map((source) => source.id);
  return publishers;
};

export const getEverything = async (value) => {
  const url = `${API_URL}/everything?q=${value}&apiKey=${API_KEY}&pageSize=20`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
