import React from 'react';

export default class LaunchTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 1,
        launchesPerPage: 20
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    render() {
      var launches = this.props.launches;
      const {currentPage, launchesPerPage } = this.state;

       // Logic for displaying page numbers
       const pageNumbers = [];
       for (let i = 1; i <= Math.ceil(launches.length / launchesPerPage); i++) {
         pageNumbers.push(i);
       }
 

      // Logic for displaying current todos
      const indexOfLastLaunch = currentPage * launchesPerPage;
      const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;

      const filterText = this.props.filterText.toLowerCase();
      // const sortByLatestTime = this.props.sortByLatestTime;
      // const sortByAscendingMissionName = this.props.sortByAscendingMissionName;
      // const sortByAscendingRocketName = this.props.sortByAscendingRocketName;
      // const sortByAscendingRocketType = this.props.sortByAscendingRocketType;

      const rows = [];

     
      // if(sortByLatestTime){
      //   launches = sortBy(launches, ['launch_date_local']);
      // }else{
      //   launches = sortBy(launches, ['launch_date_local']).reverse();
      // }

      // if(sortByAscendingMissionName){
      //   launches = sortBy(launches, ['mission_name']);
      // }else{
      //   launches = sortBy(launches, ['mission_name']).reverse();
      // }

      // if(sortByAscendingRocketName){
      //   launches = sortBy(launches, ['rocket_name']);
      // }else{
      //   launches = sortBy(launches, ['rocket_name']).reverse();
      // }

      // if(sortByAscendingRocketType){
      //   launches = sortBy(launches, ['rocket_type']);
      // }else{
      //   launches = sortBy(launches, ['ocket_type']).reverse();
      // }


      launches.forEach((launch, index) => {
        if (launch.mission_name.toLowerCase().indexOf(filterText) === -1 && launch.rocket.rocket_name.toLowerCase().indexOf(filterText) === -1
        && launch.rocket.rocket_type.toLowerCase().indexOf(filterText) === -1 ) {
          return;
        }
        rows.push(
          <tr key ={index}>
            <td>{launch.mission_name}</td>
            <td>{launch.rocket.rocket_name}</td>
            <td>{launch.rocket.rocket_type}</td>
            <td>{launch.launch_date_local}</td>
          </tr>
        );
      });

      const toDisplay = rows.slice(indexOfFirstLaunch, indexOfLastLaunch);



      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Mission Name</th>
                <th>Rocket Name</th>
                <th>Rocket Type</th>
                <th>Launch Date</th>
              </tr>
            </thead>
            <tbody>{toDisplay}</tbody>
          </table>
          <ul>
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  };