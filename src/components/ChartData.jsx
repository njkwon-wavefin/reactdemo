import React from 'react'
import {ScatterPlot} from 'react-d3-basic'

export default function ChartData(props) {
  //var chartData = require('dsv?delimiter=,!../data/garbage.csv');

  // your date format, use for parsing
  var chartData = [
    {"month":1,"total":770095, "incineration":295355, "garbageBury":339023, "largeGarbageRecycle":0, "foodWaste":0,"recycle":75630,"other":60087,"average":1.124},
    {"month":2,"total":629350, "incineration":248283, "garbageBury":256351, "largeGarbageRecycle":0, "foodWaste":0,"recycle":74732,"other":49983,"average":1.016}
  ];

  var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'total',
        name: 'Total',
        color: 'red'
      },
      {
        field: 'incineration',
        name: 'Incineration',
        color: 'blue'
      },
      {
        field: 'garbageBury',
        name: 'Garbage Bury',
        color: 'green'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.month;
    },
    xScale = 'time';

    return (
      <ScatterPlot
      data= {chartData}
      width= {width}
      height= {height}
      margins= {margins}
      chartSeries= {chartSeries}
      x= {x}
      xScale= {xScale}
    />
  );
}
