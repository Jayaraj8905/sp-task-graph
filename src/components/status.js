import React, { Component } from 'react';

export default class Status extends Component {
  render() {
    return(
      <div className="status">
        <div className="temperature">
          <div className="cloud-font">
            <i className="fa fa-cloud" aria-hidden="true"></i>
          </div>
          <div className="info">
            <h4>Partly Cloudy</h4>
            <div>
              <p><i className="fa fa-thermometer-empty" aria-hidden="true"></i>26.4 C</p>
              <p><i className="fa fa-tint" aria-hidden="true"></i>92%</p>
            </div>
          </div>
        </div>
        <div className="other-status">
          <div>
            <p>PSI</p>
            <p className="value">53</p>
            <p>Moderate</p>
          </div>
          <div>
            <p>RAIN</p>
            <p className="value">0</p>
            <p>mm</p>
          </div>
          <div>
            <p>DENGUE</p>
            <p className="value">Nil</p>
          </div>
          <div className="add">
            <p><i className="fa fa-plus-circle" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
    )
  }
}
