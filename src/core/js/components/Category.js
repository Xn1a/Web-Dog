import React, { Component } from 'react';
import PopupMenu from './PopupMenu';

const DISPLAY_CHECKLIST = "checklist";
const DISPLAY_NORMAL= "normal";

class Category extends Component {

  constructor() {
    super();
    this.state = {
      shownMenu: false
    };
    this.popupmenu = this.popupmenu.bind(this);
  }

  popupmenu() {
    this.setState({
      shownMenu: !this.state.shownMenu
    });
  }

  render() {
    // Normal display
    if (this.props.display == DISPLAY_NORMAL)  {
      return (
        <div className="card App-category-normal">
          <img className="App-category-menu" src={this.props.menuIcon} onClick={this.popupmenu} />
          <PopupMenu shown={this.state.shownMenu}>
            <li onClick={() => this.showDialog('edit')}>Edit</li>
            <li onClick={() => this.showDialog('delete')}>Delete</li>
            <li onClick={() => this.showDialog('share')}>Share</li>
          </PopupMenu>
          <h3>{this.props.title}</h3>
        </div>
      );
    }
    // Checklist display
    else {
      return (
        <div className="App-category-checklist">
          <input type="checkbox" /> // border-color: this.props.color
          <h3>{this.props.title}</h3>
        </div>
      );
    }
  }
}

export default Category;
