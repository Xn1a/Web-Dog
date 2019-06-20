import React from 'react';
import '../css/App.scss';
import settingsIcon from '../core/icons/settings.svg';
import App from '../core/js/App';

class DogApp extends App {
    render() {
        return (
            <App title="Dog Manager"
                settingsIcon={settingsIcon}
                mainActionText="Test"
                mainAction={this.onClickMainAction}>
            </App>
        );
    }

    onClickMainAction() {
    }
}

export default DogApp;
