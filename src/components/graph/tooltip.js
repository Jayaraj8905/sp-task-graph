import React from 'react';

export const GraphTooltip = ({payload}) => {
  
  const tidePayload = payload['0'] && payload['0'].payload;

  if (tidePayload) {
    return (
      <div className="tooltip">
        <p>{new Date(tidePayload.time).toLocaleString()}</p>
        <p className="time">Tide - {tidePayload.tideHeight}m</p>
      </div>
    )
  } else {
    return (
      ''
    )
  }
}