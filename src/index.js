import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {launchesPast} from './launchData.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = JSON.parse(JSON.stringify(launchesPast));
root.render(
  <React.StrictMode>
    <App launches={data}/>
  </React.StrictMode>
);
