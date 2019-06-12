// helper that filters movies data and returns an object
// containing all movies, most viewed movies, and feature movie

export const movieData = jsonData => {
  const movieData = jsonData;

  // most viewed movies
  const popularMovie = movieData.filter(movie => movie.release_date > 2006);

  // TODO: feature movie

  movieData.mostViews = popularMovie;

  return movieData;
};
