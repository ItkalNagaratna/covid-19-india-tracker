import React from "react";
import { Chart, Interval, Tooltip } from 'bizcharts';

const StateWiseChart = (props) => {
  // console.log("props.data", props.data);

  const locations = props.data && props.data.data;
  const data = locations && locations.map(loc => {
    return {
      name: loc.state,
      active: loc.active,
      recovered: loc.recovered,
      confirmed: loc.confirmed,

    }
  });

  // console.log("datadatadata", data);

  return <Chart height={400} autoFit data={data} interactions={['active-region']}>
    <Interval position="name*confirmed" />
    <Tooltip shared />
  </Chart>
}



export default StateWiseChart;

