import React, { Component } from 'react';
import MovieList from './components/MovieList';
import axios from 'axios';

const URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(res => {
        this.setState({
          movies: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Movie Browser</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
