import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Button from './components/Button';
import { fetchData } from './api';

const URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
  state = {
    allMovies: [],
    trendingMovies: [],
    showMovies: false,
    buttonText: 'Show Movies', // no movies displaying on initial render
  };

  componentDidMount() {
    fetchData(URL)
      .then(res => {
        this.setState({
          allMovies: res,
        });
        this.showTrendingMovies(res);
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

  showTrendingMovies = movieData => {
    let randomMovies = [];

    for (let i = 0; i < 12; i += 2) {
      randomMovies.push(movieData[i]);
    }

    this.setState({
      trendingMovies: randomMovies,
    });
  };

  render() {
    const { allMovies, buttonText, showMovies, trendingMovies } = this.state;

    return (
      <div>
        <h1>Movie Browser</h1>
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
