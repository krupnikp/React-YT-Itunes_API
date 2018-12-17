import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange(term) {
        this.setState({ term: term });
        this.props.onChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input className={'search__input'}
                    value={this.state.term}
                    onChange={(event) => {
                        this.onInputChange(event.target.value)
                    }}
                    placeholder='Search Music'
                />
            </div>
        );
    }
}

export default SearchBar;
