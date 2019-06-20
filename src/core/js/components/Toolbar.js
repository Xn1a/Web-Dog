import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    let mainButton = this.props.mainActionText ? (
      <button className="App-button-main card"
              type="button" onClick={this.props.mainAction.bind(this)}>
              {this.props.mainActionText}
            </button>
        ) : null

      // TODO: Display images only if set
    return (
      <header className="toolbar">
        <img alt="" src={this.props.logo} className="App-logo" />
        {this.props.children}
        <h1 className="App-title">{this.props.title}</h1>
        {mainButton}
        <img alt="Settings" src={this.props.settingsIcon} className="App-settings" />
      </header>
    );
  }
}

export default Toolbar;
