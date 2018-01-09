import './style.css';
import './css/header.css';
import './css/status.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import Status from './components/status';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Status />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
