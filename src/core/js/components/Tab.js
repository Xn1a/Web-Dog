import React, { Component } from 'react';

class Tab extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
  }

  onSelect(event) {
    this.setState ({
      selected: !this.state.selected
    });

    /*if (this.state.selected) {
      toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
      toggleContainer.style.backgroundColor = '#D74046';
    }
    else {
      toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
      toggleContainer.style.backgroundColor = 'dodgerblue';
    }*/

    //this.props.onSelect
  }

  render() {
    var className = this.state.selected ? 'selected' : 'neutral';

    return (
      <button  className={'tab card tab-' + className}
        type="button" onClick={this.onSelect.bind(this)}>
        {this.props.title}
      </button>
    );
  }
}

export default Tab;
