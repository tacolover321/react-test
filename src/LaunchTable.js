import React from 'react';


export default class LaunchTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const orderByLatest = this.props.sortByLatestTime;
      const launches = this.props.launches;
      const rows = [];

      if(orderByLatest){
        launches.sort((a,b)=>{
          return b.launch_date_local - a.launch_date_local;
        })
      }else{
        launches.sort((a,b)=>{
          return a.launch_date_local - b.launch_date_local;
        })
      }


      launches.forEach((launch) => {
        if (launch.mission_name.indexOf(filterText) === -1 && launch.rocket.rocket_name.indexOf(filterText) === -1
        && launch.rocket.rocket_type.indexOf(filterText) === -1 ) {
          return;
        }
        rows.push(
          <tr>
            <td>{launch.mission_name}</td>
            <td>{launch.rocket.rocket_name}</td>
            <td>{launch.rocket.rocket_type}</td>
            <td>{launch.launch_date_local}</td>
          </tr>
        );
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Mission Name</th>
              <th>Rocket Name</th>
              <th>Rocket Type</th>
              <th>Launch Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  };