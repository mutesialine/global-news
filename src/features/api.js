const API_KEY = "2a4f6ac999f3498aa110ce6580a412b0";

export const getTopHeadlines = async (country, sources = null) => {
  const url = sources
    ? `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getSources = async () => {
  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const publishers = data.sources.map((source) => source.id);
  return publishers;
};

export const getEverything = async (query) => {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
