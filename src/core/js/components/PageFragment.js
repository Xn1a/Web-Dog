import React, { Component } from 'react';

class PageFragment extends Component {
  render() {
    return (
      <div className="pagefragment">
        <h3 className="pagefragment-title">{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default PageFragment;
