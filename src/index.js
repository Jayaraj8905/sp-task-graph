import './style.css';
import './css/header.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/header';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
