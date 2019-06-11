import React from 'react';

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

export default MovieList;
