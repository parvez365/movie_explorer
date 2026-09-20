export const getMovies = async () => {
  const url = `https://api.tvmaze.com/shows`;

  const result = await fetch(url);
  if (!result.ok) {
    throw new Error("getMovies request failed!");
  }
  const data = await result.json();

  return data;
};
