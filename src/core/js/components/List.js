import React, {
  Component
} from 'react';

class List extends Component {
  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const list = this.props.lists
    // For each type of element
    return list.map((type) => {
        // For each item of list
        if (type.items !== undefined) {
          return type.items.map((item) => {
            return type.binder(item);
          });
        }
      });
  }

  render() {
    return ( 
      <div className = "App-list"> 
        {this.renderItems()} 
      </div>
    );
  }
}

export default List;