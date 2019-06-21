import React, { Component } from 'react';
import MovieList from './MovieList';
import Button from './Button';

class Modal extends Component {
  state = {
    displayModal: false,
  };

  openModal = event => {
    event.preventDefault();
    console.log('modal will open');
    this.setState({
      displayModal: true,
    });
  };

  closeModal = event => {
    event.preventDefault();
    console.log('modal will close');
    this.setState({
      displayModal: false,
    });
  };

  render() {
    return (
      <div>
        <Button buttonName={'Show Movie Details'} onClick={this.openModal} />
        <Button buttonName={'Hide Movie Details'} onClick={this.closeModal} />
      </div>
    );
  }
}

export default Modal;
