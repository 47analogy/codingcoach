import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
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
          <Card key={movie.id}>
            <CardBody>
              <CardTitle>{movie.title}</CardTitle>
              <CardImage>
                <img src={placeholderImg} alt="placeholder" />
              </CardImage>
            </CardBody>
            <Modal />
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
