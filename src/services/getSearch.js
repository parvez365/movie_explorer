export const getSearch = async (search) => {
  const url = `https://api.tvmaze.com/search/shows?q=${search}`;

  const result = await fetch(url);
  if (!result.ok) {
    throw new Error("getSearch request failed!");
  }
  const data = await result.json();

  return data.map((item) => item.show);
};
