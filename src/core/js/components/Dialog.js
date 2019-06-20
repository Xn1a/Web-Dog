import React, { Component } from 'react';

class Dialog extends Component {

  constructor() {
    super();
    this.state = {
      shown: true
    }
  }

  close() {
    this.setState({
      shown: false
    })
  }

  render() {
    if (this.state.shown) {
      return (
            <dialog className="card dialog">
              <img className="dialog-close" src={this.props.closeIcon} onClick={this.close.bind(this)} />
              <h1 className="dialog-title">{this.props.title}</h1>
              {this.props.children}
            </dialog>
        );
      }
      else {
        this.state = {
          shown: true
        }
        return('')
      }

    }
  }

  export default Dialog;
