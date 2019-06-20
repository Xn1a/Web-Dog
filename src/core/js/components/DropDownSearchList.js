import React, { Component } from 'react';
import Search from './Search.js';
import List from './List.js';
import Category from './Category.js';

/*@prop params (array object for each type of item => <itemTypeBinder>, <items>,
* <itemPropsToSearch>)
* [{binder: <binding function>, items: <[items]>, targets: [<prop>, ...]}, ...]
*
* A constant copy of the list is keeped by the DropDownSearchList :
* list with targets fields: this.props.params
* constant list: this.lists
* dynamic list: this.state.dynamicList
*/
class DropDownSearchList extends Component {
  constructor(props) {
    super(props);

    // Fille constant list
    this.lists = [];
    props.params.map((type) => {
      this.lists = [...this.lists, {binder: type.binder, items: type.items}];
    });

    // Fill dynamic list
    this.state = {
      dynamicList: this.lists
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(research) {
    if (research == "") {
      this.setState({
        dynamicList: this.lists // Reset to initial state (display all items)
      });
    }
    else {
      this.props.params.map((type) => {
        type.items.map((item) => {
          type.targets.map((prop) => {
            if (!item[prop].startsWith(research)) {
              // Remove from dynamicList
              var list = this.state.dynamicList;
              const pos = list.map(item => {return item[prop]}).indexOf(item[prop]);
              if(pos != -1) {
                list.splice(pos, 1);
              }
              this.setState({
                dynamicList: list
              });
            }
            else {
              // On le remet si il y est pas deja
              if(!(item in this.state.dynamicList)) {
                this.setState({
                  dynamicList: [...this.state.dynamicList, item]
                });
              }
            }
          });
        });
      });
    }
  }

  render() {
    return (
      <div className="App-dropdown-searchlist">
        <Search onChange={this.onSearch} />
        <List lists={this.state.dynamicList} />
      </div>
    );
  }

}

export default DropDownSearchList;
