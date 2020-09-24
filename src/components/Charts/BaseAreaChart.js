import React from 'react';
import {
  Chart,
  Area,
  Line,
  Tooltip,
} from 'bizcharts';

const BaseAreaChart = (props) => {

  const scale = {
    value: {
      min: 100,
      nice: true,
    },
    key: {
      range: [0, 1],
    },
  };

  return (
    <Chart scale={scale} height={200} data={props.data} autoFit width={300} >
      <Tooltip shared />
      <Area position="key*value" />
      <Line position="key*value" />
    </Chart>
  );
}

export default BaseAreaChart;