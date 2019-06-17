import React from 'react';
import PropTypes from 'prop-types';

const placeholderImg = 'https://picsum.photos/140/100';

const FeatureMovie = props => {
  const { movies } = props;

  return (
    <div>
      {movies.map(featMovie => (
        <div key={featMovie.id}>
          <li>{featMovie.title}</li>
          <li>{featMovie.description}</li>
          <li>
            <img src={placeholderImg} alt="placeholder" />
          </li>
        </div>
      ))}
    </div>
  );
};

FeatureMovie.defaultProps = {
  movies: [
    {
      title: 'Movie currently not available',
      description: 'Coming soon...',
    },
  ],
};

FeatureMovie.propTypes = {
  movie: PropTypes.array,
};

export default FeatureMovie;
