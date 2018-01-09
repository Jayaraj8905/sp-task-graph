import './style.css';
import './css/header.css';
import './css/status.css';
import './css/outlook.css';
import './css/graph.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import Status from './components/status';
import Outlook from './components/outlook';
import Graph from './components/graph/graph';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Status />
        <Graph />
        <Outlook />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
