import React, {Component} from 'react';
import {AppContext} from '../App.js';

class AppContextProvider extends Component {

/* If want to pass states (var that change)
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }
*/
  render() {
    return(
      <AppContext.Provider value={{props: this.props}}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
