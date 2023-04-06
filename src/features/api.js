const API_KEY = "2868fed31c4d4eccbc9ecbea3f12b80d";

export const getTopHeadlines = async (country, sources = null) => {
  const url = sources
    ? `https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
};

export const getSources = async () => {
  const url = `https://news-proxy.netlify.app/api/top-headlines/sources?apiKey=${API_KEY}`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const publishers = data.sources.map((source) => source.id);
  return publishers;
};

export const getEverything = async () => {
  const url = `https://news-proxy.netlify.app/api/everything?q=everything&apiKey=${API_KEY}`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
};
