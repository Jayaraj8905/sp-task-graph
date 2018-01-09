import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return(
      <header>
        <div className="left-section">
          <div className="menu">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div>
            <h5>myENV</h5>
            <h5>Current Location<i className="fa fa-angle-down" aria-hidden="true"></i></h5>
          </div>
        </div>
        <div className="right-section">
          <span className="chart">
            <i className="fa fa-area-chart" aria-hidden="true"></i>
          </span>
          <span className="notification">
            <i className="fa fa-bell" aria-hidden="true"></i>
          </span>
        </div>
      </header>
    )
  }
}