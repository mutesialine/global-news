const API_KEY = "9d31be5f33f34336bd35d693b1f0e8fa";

export const getTopHeadlines = async (country, sources = null) => {
  const url = sources
    ? `https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getSources = async () => {
  const url = `https://news-proxy.netlify.app/api/top-headlines/sources?apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const publishers = data.sources.map((source) => source.id);
  return publishers;
};

export const getEverything = async () => {
  const url = `https://news-proxy.netlify.app/api/everything?q=everything&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
