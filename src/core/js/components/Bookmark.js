import React, { Component } from 'react';
import PopupMenu from './PopupMenu.js';
import Dialog from './Dialog.js';
import BookmarkForm from './BookmarkForm.js';
import {AppContext} from '../App.js';
import closeIcon from '../../icons/cross.svg';

class Bookmark extends Component {

  constructor() {
    super();
    this.state = {
      shownMenu: false
    };
  }

  popupmenu() {
    this.setState({
      shownMenu: !this.state.shownMenu
    });
  }

  renderEditDialog() {
    return(
      <Dialog closeIcon={closeIcon} title="Edit">
        <BookmarkForm name={this.props.name} url={this.props.url} submitText="Save"/>
      </Dialog>
    );
  }

  renderDeleteDialog() {
    return(
      <Dialog closeIcon={closeIcon} title={'Delete bookmark ' + this.props.name + " ?"}>
        <button type="button" onClick="">Delete</button>
        <button type="button" onClick="">Cancel</button>
      </Dialog>
    );
  }

  renderShareDialog() {
    return(
      <Dialog closeIcon={closeIcon} title={'Share bookmark ' + this.props.name}>
      </Dialog>
    );
  }

  render() {
    return (
      <figure className="App-bookmark card" onClick={this.openBookmark}>
        <img className="App-bookmark-menu" src={this.props.menuIcon} onClick={this.popupmenu.bind(this)} />
        <AppContext.Consumer>
          {(context) => (
            <PopupMenu shown={this.state.shownMenu}>
              <li onClick={() => context.props.showDialog(this.renderEditDialog())}>Edit</li>
              <li onClick={() => context.props.showDialog(this.renderDeleteDialog())}>Delete</li>
              <li onClick={() => context.props.showDialog(this.renderShareDialog())}>Share</li>
            </PopupMenu> )}
          </AppContext.Consumer>
          <div className="App-bookmark-image">
            <img src={this.props.image} />
          </div>
          <a href={this.props.url} target="_blank">
            <figcaption>
              <h3 className="App-bookmark-title">{this.props.name}</h3>
              <h5 className="App-bookmark-url">{this.props.url}</h5>
              <h5 className="App-bookmark-category">{this.props.category}</h5>
            </figcaption>
          </a>
        </figure>
      );
    }
  }

  export default Bookmark;
