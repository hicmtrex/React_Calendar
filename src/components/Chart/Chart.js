import React, { Component } from 'react'
import './Chart.css'

import ChartBar from './Chartbar'

const Chart = (props) => {
    const dataPontValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPontValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={ dataPoint.label}/>)}
        </div>
    )
   
};

export default Chart
