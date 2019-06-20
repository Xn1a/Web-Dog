import React, { Component } from 'react';

class PopupMenu extends Component {
  render() {
    var showClass = this.props.shown ? 'show' : '';

    return (
      <ul className={'App-popupmenu card '+ showClass}>
        {this.props.children}
      </ul>
    );
  }
}

export default PopupMenu;
