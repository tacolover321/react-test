import SearchBar from './Search.js';
import React from 'react';
import LaunchTable from './LaunchTable.js';
import SortButton from './Sort';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      sortByLatestTime: true,
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSortByTime = this.handleSortByTime.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  };

  handleSortByTime() {
    this.setState(prevState => ({
      sortByLatestTime: !prevState.sortByLatestTime
    }));
  };

  render() {
    console.log(this.state.sortByLatestTime);

    return (
      <div>
        <SortButton 
          sortByLatestTime={this.state.sortByLatestTime}
          onOrderChange={this.handleSortByTime}
        />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <LaunchTable
          launches={this.props.launches}
          filterText={this.state.filterText}
          sortByLatestTime={this.state.sortByLatestTime}
        />
      </div>
    );
  }
}

export default App;
