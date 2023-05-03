import React, { createElement, useEffect, useState, useRef } from "react";
import './stile.css'
import r from "./utils";
import Chart from "./chart";
import * as d3 from 'd3'

const host = "http://localhost:8053"
  
async function loadMainData() {
  return new Promise((resolve, reject) => {
    fetch(host + '/mainData/' )
    .then(res => res.ok ? res.json() : null)
    .then(res => !!res ? resolve(res) : reject(res))

  });
}

function App() {

  async function chpok(id){
    let elem = document.getElementById(id); 
    let state = elem.style.display; 
    if (state =='') elem.style.display='none'; 
    else elem.style.display=''; 
  } 
  
  function But (){
    const k =<div><button onClick={() => (chpok(1))}>Random counts</button></div>
    
    return k;
  }

	function render() {
    return [
      <But/>,
      <Chart/>,
    ];
  }

  return {render} 
}


export default App;



  

