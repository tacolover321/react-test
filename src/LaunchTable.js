import React from 'react';
import {sortBy} from 'underscore'

export default class LaunchTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const orderByLatest = this.props.sortByLatestTime;
      var launches = this.props.launches;
      const rows = [];

      if(orderByLatest){
        launches = sortBy(launches, 'launch_date_local').reverse();
      }else{
        launches = sortBy(launches, 'launch_date_local');
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