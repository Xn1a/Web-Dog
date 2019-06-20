import React, { Component } from 'react';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
    // Send research to the SearchList
    //this.props.onChange(event.target.value, this.props.items);
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="App-search">
        <img className="search-icon" src={this.props.icon} />
        <input
          value={this.state.value.toLowerCase()}
          type="text"
          placeholder="Search..."
          onChange={this.onChange}/>
      </div>
    );
  }
}

export default Search;
