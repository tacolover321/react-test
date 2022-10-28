import SearchBar from './Search.js';
import React from 'react';
import LaunchTable from './LaunchTable.js';
import SortButton from './Sort';
import {sortBy} from 'underscore'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: this.props.launches,
      filterText: '',
      sortByLatestTime: false,
      sortByAscendingMissionName: false,
      sortByAscendingRocketName: false,
      sortByAscendingRocketType: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSortByTime = this.handleSortByTime.bind(this);
    this.handleSortByMissionName = this.handleSortByMissionName.bind(this);
    this.handleSortByRocketName = this.handleSortByRocketName.bind(this);
    this.handleSortByRocketType = this.handleSortByRocketType.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  };

  handleSortByTime() {
    this.setState(prevState => ({
      sortByLatestTime: !prevState.sortByLatestTime,
      launches: this.props.launches
    }));

    if(this.state.sortByLatestTime){
      this.setState({
        launches: sortBy(this.state.launches, ['launch_date_local']).reverse()
      })
    } else {
      this.setState({
        launches: sortBy(this.state.launches, ['launch_date_local'])
      })
    }
  };

  handleSortByMissionName() {
    this.setState(prevState => ({
      sortByAscendingMissionName: !prevState.sortByAscendingMissionName,
      launches: this.props.launches
    }));

    if(this.state.sortByAscendingMissionName){
      this.setState({
        launches: sortBy(this.state.launches, ['mission_name'])
      })
    } else {
      this.setState({
        launches: sortBy(this.state.launches, ['mission_name']).reverse()
      })
    }
  };

  handleSortByRocketName() {
    this.setState(prevState => ({
      sortByAscendingRocketName: !prevState.sortByAscendingRocketName,
      launches: this.props.launches
    }));

    if(this.state.sortByAscendingRocketName){
      this.setState({
        launches: sortBy(this.state.launches, ['rocket.rocket_name'])
      })
    } else {
      this.setState({
        launches: sortBy(this.state.launches, ['rocket.rocket_name']).reverse()
      })
    }
  };

  handleSortByRocketType() {
    this.setState(prevState => ({
      sortByAscendingRocketType: !prevState.sortByAscendingRocketType,
      launches: this.props.launches
    }));

    if(this.state.sortByAscendingRocketType){
      this.setState({
        launches: sortBy(this.state.launches, ['rocket.rocket_type'])
      })
    } else {
      this.setState({
        launches: sortBy(this.state.launches, ['rocket.rocket_type']).reverse()
      })
    }
  };

  render() {

    return (
      <div>
        <SortButton 
          sortByLatestTime={this.state.sortByLatestTime}
          sortByAscendingMissionName={this.state.sortByAscendingMissionName}
          sortByAscendingRocketName={this.state.sortByAscendingRocketName}
          sortByAscendingRocketType={this.state.sortByAscendingRocketType}
          onSortDateOrderChange={this.handleSortByTime}
          onSortMissionNameChange={this.handleSortByMissionName}
          onSortRocketNameChange={this.handleSortByRocketName}
          onSortRocketTypeChange={this.handleSortByRocketType}
        />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <LaunchTable
          launches={this.state.launches}
          filterText={this.state.filterText}
          sortByLatestTime={this.state.sortByLatestTime}
          sortByAscendingMissionName={this.state.sortByAscendingMissionName}
          sortByAscendingRocketName={this.state.sortByAscendingRocketName}
          sortByAscendingRocketType={this.state.sortByAscendingRocketType}
        />
      </div>
    );
  }
}

export default App;
