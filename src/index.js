import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const app = App()
const root = ReactDOM.createRoot(document.getElementById('root'));
function main (){
    root.render(app.render())
}
setInterval(main,1000)
