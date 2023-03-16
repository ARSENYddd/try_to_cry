import React, { createElement, useEffect, useState, useRef } from "react";
import './stile.css'
import r from "./utils";
// import Chart from "./chart";
import * as d3 from 'd3'
   

function Сhart(){
  let data = [{
        name:  "Og",
        value: 15,
      },
      {
        name:  "Oleeg",
        value: 14,
      },
      {
        name:  "Olg",
        value: 8,
      },
      {
        name:  "Oleg",
        value: 5,
      }]
  // if (data.length == 0) return;
  const width = 500;
  const height = 150;
  const padding = 20;
  const maxValue = 20; // Maximum data value
  console.log('ddddddddddddddddddd')
  const [chartdata,setChartdata] = useState(data)

  const svgRef= useRef()

//  2] Setup random data generator and SVG canvas -//
  // const newData = () => chartdata.map(
  //   function (d) {
  //     d.value = Math.floor(
  //       Math.random() * (maxValue + 1)///////
  //     )
  //     return d
  //   } 
  // )

  useEffect(()=>{
    //  3] Setup functions for Scales ------------------//
      
        //xscales
        const xScale = d3.scalePoint()
                        .domain(chartdata.map( (d) => d.name ))
                        .range([(0+padding),(width - padding)])
        console.log('Start - End',xScale('Car'),xScale('Cinema'))                

        //Yscales
        const yScale = d3.scaleLinear()
                          .domain([0, d3.max( chartdata, function (d) {return d.value})])
                          .range([(height - padding), (0 + padding)])
                          
        console.log('Start - End',yScale(0),yScale(10)) 
      

    //  4] Setup functions to draw Lines ---------------//

        const line = d3.line()
                        .x((d)=> xScale(d.name))
                        .y( (d)=>yScale(d.value) )
                      //  .curve(d3.curveMonotoneX)
        
        console.log('chart draw commands', line(chartdata) )               

    //  5] Draw line        ---------------------------//
        d3.select(svgRef.current)
          .select('path')
          .attr('d', (value) => line(chartdata))
          .attr('fill','none')
          .attr('stroke', 'white')

    //  6] Setup functions to draw X and Y Axes --------//
        const xAxis = d3.axisBottom(xScale)
        const yAxis = d3.axisLeft(yScale)

    //  7] Draw x and y Axes   -------------------------//
        d3.select('#xaxis').remove()
        d3.select(svgRef.current)
          .append('g')
          .attr('transform',`translate(0,${height - padding})`)
          .attr('id','xaxis')
          .call(xAxis)
        
      d3.select('#yaxis').remove()
      d3.select(svgRef.current)
          .append('g')
          .attr('transform',`translate(${padding},0)`)
          .attr('id','yaxis')
          .call(yAxis)   

    }, 
    [chartdata],
  )

  let crattt = (
    <div className="App" id="1">
    <header className="App-header">

    <svg id="chart" ref={svgRef} viewBox="0 0 500 150">

        <path d="" fill="none" stroke="white" strokeWidth="5" />
        
    </svg>
    <p>
      <button type='butto' onClick={()=> setChartdata(ref)}>
            Click to refresh expenses data
      </button>
    </p>

    </header>
    </div>
  )
  return crattt;
}

export default Сhart