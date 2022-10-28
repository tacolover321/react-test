import React from 'react';


export default class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSortDateOrderChange = this.handleSortDateOrderChange.bind(this);
        this.handleMissionNameOrderChange = this.handleMissionNameOrderChange.bind(this);
        this.handleRocketNameOrderChange = this.handleRocketNameOrderChange.bind(this);
        this.handleRocketTypeOrderChange = this.handleRocketTypeOrderChange.bind(this);
    }

    handleSortDateOrderChange (){
        this.props.onSortDateOrderChange();
    }

    handleMissionNameOrderChange () {
        this.props.onSortMissionNameChange();
    }

    handleRocketNameOrderChange () {
        this.props.onSortRocketNameChange();
    }

    handleRocketTypeOrderChange () {
        this.props.onSortRocketTypeChange();
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleSortDateOrderChange}>
                    {this.props.sortByLatestTime ? 'Latest time' : 'Earliest time'}
                </button>
                <button type="button" onClick={this.handleMissionNameOrderChange}>
                    {this.props.sortByAscendingMissionName ? 'Mission Name A-Z' : 'Mission Name Z-A'}
                </button>
                <button type="button" onClick={this.handleRocketNameOrderChange}>
                    {this.props.sortByAscendingRocketName ? 'Rocket Name A-Z' : 'Rocket Name Z-A'}
                </button>
                <button type="button" onClick={this.handleRocketTypeOrderChange}>
                    {this.props.sortByAscendingRocketType ? 'Rocket Type A-Z' : 'Rocket Type Z-A'}
                </button>
            </div>
        )
    }
};