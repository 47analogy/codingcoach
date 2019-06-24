import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
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
            <Button
              buttonName={'Show Movie Details'}
              onClick={props.showModal}
            />
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
