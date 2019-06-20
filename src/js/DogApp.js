import React from 'react';
import '../css/App.scss';
import settingsIcon from '../core/icons/settings.svg';
import logo from '../logo.svg';
import App from '../core/js/App';

class DogApp extends App {
    render() {
        return (
            <App title="Dog Manager"
                settingsIcon={settingsIcon}
                mainActionText="Test"
                mainAction={this.onClickMainAction}
                logo={logo}>
            </App>
        );
    }

    onClickMainAction() {
        console.log("Click on main button !");
    }
}

export default DogApp;
