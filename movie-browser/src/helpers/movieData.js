// helper that filters movies data and returns an object
// containing all movies, most viewed movies, and feature movie

export const movieData = jsonData => {
  const movieData = jsonData;

  // top most viewed movies
  const popularMovie = movieData
    .filter(movie => movie.rt_score > 94)
    .sort((a, b) => b.rt_score - a.rt_score);

  while (popularMovie.length > 6) {
    popularMovie.pop();
  }

  // TODO: feature movie

  movieData.mostViews = popularMovie;

  return movieData;
};
