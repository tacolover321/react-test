import React from 'react';


export default class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    }

    handleSortOrderChange (){
        this.props.onOrderChange();
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleSortOrderChange}>
                    {this.props.sortByLatestTime ? 'Latest time' : 'Earliest time'}
                </button>
            </div>
        )
    }
};