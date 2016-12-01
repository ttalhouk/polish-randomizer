import React, { Component } from 'react';
import Randomize from './randomize';
import RandomizeStyle from './randomize_style';
import RandomResult from './random_result';

export default class App extends Component {
  render() {
    return (
      <div>
        <Randomize />
        <RandomizeStyle />
        <RandomResult />
      </div>
    );
  }
}
