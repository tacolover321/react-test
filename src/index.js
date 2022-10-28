import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById('root'));
const endpoint = "https://api.spacex.land/graphql/";
const LAUNCH_QUERY = `{
  launches {
    mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_date_local
    }
}`;

const load = () => { 
  return axios({
    url: endpoint,
    method: "POST",
    data: {
      query: LAUNCH_QUERY
    }
  }).then((response) => {
    return root.render(
      <React.StrictMode>
      <App launches={response.data.data.launches}/>
      </React.StrictMode>
    );
  }).catch((error) => {
    return root.render(<pre>{error.message}</pre>);
  })
};

load();
