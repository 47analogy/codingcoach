import React from 'react';
import PropTypes from 'prop-types';

const placeholderImg = 'https://picsum.photos/140/100';

const MovieList = props => {
  const { movies } = props;

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <li>{movie.title}</li>
          <li>
            <img src={placeholderImg} alt="placeholder" />
          </li>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  allMovies: PropTypes.array,
};

export default MovieList;
