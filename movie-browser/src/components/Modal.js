import React from 'react';

const Modal = props => {
  const { modalStatus, movieInfo } = props;
  return (
    <div>
      {movieInfo.map(movie => {
        return (
          <div key={movie.id}>
            <div>Title: {movie.title}</div>
            <div>Description: {movie.description}</div>
            <div>Director: {movie.director}</div>
            <div>Producer: {movie.producer}</div>
            <div>Release Date: {movie.release_date}</div>
            <div>Rating: {movie.rt_score}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
