import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Button from './components/Button';
import FeatureMovie from './components/FeatureMovie';
import { fetchData } from './helpers/api';
import { movieData } from './helpers/movieData';

const URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
  state = {
    allMovies: [],
    trendingMovies: [],
    featureMovie: [],
    showMovies: false,
    buttonText: 'Show Movies', // no movies displaying on initial render
  };

  componentDidMount() {
    fetchData(URL)
      .then(res => {
        this.setState({
          allMovies: movieData(res),
          trendingMovies: movieData(res.mostViews),
          featureMovie: movieData(res.feature),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleShowMovies = () => {
    const { showMovies } = this.state;

    this.setState({
      showMovies: !showMovies,
      buttonText: showMovies ? 'Show Movies' : 'Hide Movies',
    });
  };

  render() {
    const {
      allMovies,
      buttonText,
      showMovies,
      trendingMovies,
      featureMovie,
    } = this.state;

    return (
      <div>
        <h1>Movie Browser</h1>
        <h3>Feature Movie</h3>
        <FeatureMovie movie={featureMovie} />
        <h3>Most Viewed Movies</h3>
        <MovieList movies={trendingMovies} />
        <h3>All Movies</h3>
        <Button buttonName={buttonText} onClick={this.handleShowMovies} />
        {showMovies && <MovieList movies={allMovies} />}
      </div>
    );
  }
}

export default App;
