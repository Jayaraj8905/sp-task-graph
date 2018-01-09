import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Basic App
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
