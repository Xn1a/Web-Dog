import React, { Component } from 'react';
import DropDownSearchList from './DropDownSearchList.js';
import Category from './Category.js';
import CategoryStore from '../stores/CategoryStore.js';

class BookmarkForm extends Component {

  constructor() {
    super();
    // List of categories with their binder and fields
    // that will be used by DropDownSearchList
    this.dropdownlistParams = [{
      binder: this.bindCategory,
      items: CategoryStore.getAll(),
      targets: ['title']
    }];
  }

  onSubmit(event) {
    event.preventDefault();
    // TODO: Edit bookmark if exists id or add it
  }

  bindCategory(item) {
    return(
      <Category
        key={item.id}
        display={Category.DISPLAY_CHECKLIST}
        title={item.title} />
    );
  }

  render() {
    return (
      <form className='App-bookmarkform'>
        <input type="text" value={this.props.name} placeholder="Name..." />
        <input type="text" value={this.props.url} placeholder="Url..." />
        <input type="submit" value={this.props.submitText} />
        <DropDownSearchList params={this.dropdownlistParams} />
      </form>
    );
  }
}

export default BookmarkForm;
