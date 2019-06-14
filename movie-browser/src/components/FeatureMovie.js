import React from 'react';
import PropTypes from 'prop-types';

const placeholderImg = 'https://picsum.photos/140/100';

const FeatureMovie = props => {
  const { movie } = props;

  return (
    <div>
      {movie.map(featMovie => (
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

FeatureMovie.propTypes = {
  movie: PropTypes.array,
};

export default FeatureMovie;
