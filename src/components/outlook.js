import React, { Component } from 'react';

export default class Outlook extends Component {

  outlooks = [
    {day: 'WED', message: 'Afternoon and evening thundery showers.', temperature: '24-32 C', speed: '15-20 km/h'},
    {day: 'THU', message: 'Overcast and windy. Periods of moderate to heavy showers, at times with thunder.', temperature: '22-27 C', speed: '20-35 km/h'},
    {day: 'FRI', message: 'Overcast and occasionally windy. Periods of moderate to heavy showers.', temperature: '22-28 C', speed: '20-30 km/h'},
    {day: 'SAT', message: 'Overcast and windy with occasional showers.', temperature: '23-29 C', speed: '20-35 km/h'}
  ];

  renderOutlooks() {
    return this.outlooks.map((item, key) => {
      return (
        <div className="list" key={key}>
          <div className="day">
            <p>{item.day}</p>
            <i className="fa fa-cloud" aria-hidden="true"></i>
          </div>
          <div className="info">
            <p>{item.message}</p>
            <div>
              <p><i className="fa fa-thermometer-empty" aria-hidden="true"></i>{item.temperature}</p>
              <p><i className="fa fa-venus" aria-hidden="true"></i>{item.speed}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  
  render() {

    return (
      <div className="outlook">
        <h5>4-day Outlook</h5>
        {this.renderOutlooks()}
      </div>
    )
  }
}