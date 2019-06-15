import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Card,
  CardBody,
  CardTitle,
  CardImage,
} from './styles/Card';

const placeholderImg = 'https://picsum.photos/140/100';

const MovieList = props => {
  const { movies } = props;

  return (
    <div>
      <CardWrapper>
        {movies.map(movie => (
          <Card>
            <div key={movie.id}>
              <CardBody>
                <CardTitle>{movie.title}</CardTitle>
                <CardImage>
                  <img src={placeholderImg} alt="placeholder" />
                </CardImage>
              </CardBody>
            </div>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
};

MovieList.propTypes = {
  allMovies: PropTypes.array,
};

export default MovieList;
