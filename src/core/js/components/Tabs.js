import React, { Component } from 'react';

class Tabs extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: ''
    }

    //this.onTabClick = this.onTabClick.bind(this);
  }

  selectTab(tab) {
    this.setState({
    selectedTab: tab
    });
  }

  onTabClick(event) {
    console.log("Parent !");
    //this.selectTab(event.target.title);
  }

  render() {
    return (
      <div className="tabs">
        {this.props.children}
      </div>
    );
  }
}

export default Tabs;
