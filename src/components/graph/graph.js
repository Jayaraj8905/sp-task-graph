import React, { Component } from 'react';
import { ComposedChart, Area, Tooltip } from 'recharts';
import { GraphTooltip } from './tooltip'; 

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      data: [
            {time: 1515486660000, tideHeight: 2.6, sunHeight: 1.5},
            {time: 1515496440000, tideHeight: 1.8, sunHeight: 0},
            {time: 1515510300000, tideHeight: 1.2},
            {time: 1515576600000, tideHeight: 1.8},
            {time: 1515539460000, tideHeight: 2.0, sunHeight: 0},
            {time: 1515556860000, tideHeight: 1.8, sunHeight: 2.0},
            {time: 1515560460000, tideHeight: 1.4, sunHeight: 2.6},
            {time: 1515578160000, tideHeight: 2.3, sunHeight: 1.8},
            {time: 1515582840000, tideHeight: 2.6, sunHeight: 0},
            {time: 1515600780000, tideHeight: 1.4},
            {time: 1515623040000, tideHeight: 2.6},
            {time: 1515538620000, tideHeight: 2.0, sunHeight: 0},
            {time: 1515648240000, tideHeight: 1.2, sunHeight: 2.6}]
    };
  }

  render() {
    return (
      <div className="graph">
        <h5><span>Tide</span> | <span className="sunrise">Sunrise & Sunset</span></h5>
        <ComposedChart width={1000} height={300} data={this.state.data}
            margin={{top: 20, right: 20, bottom: 20, left: 0}}>
          <Tooltip content={<GraphTooltip />}/>
          <Area type='monotone' dataKey='tideHeight' fill='#80d0f7' stroke='#8884d8'/>
          <Area type='monotone' fill='transparent' dataKey='sunHeight' stroke='#ff7300'/>
       </ComposedChart>
      </div>
    );
  }
}