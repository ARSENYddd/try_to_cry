import React from "react"

const r = React.createElement
const host = "http://localhost:8053"


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
  
export default r
