import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js';
//import Dialog from './components/Dialog.js';
import AppContextProvider from './components/AppContextProvider.js';

export const AppContext = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      dialog: ''
    };
  }

  showDialog(dialog) {
    this.setState({dialog});
  }

  render() {
    return (
      <AppContextProvider showDialog={this.showDialog}>
        <div className="App">
          <Toolbar title={this.props.title}
            mainActionText={this.props.mainActionText}
            mainAction={this.props.mainAction}
            logo={this.props.logo}
            settingsIcon={this.props.settingsIcon}>
            {this.props.toolbarChildren}
          </Toolbar>
          {this.props.children}
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
