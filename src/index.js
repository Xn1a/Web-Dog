import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/DogApp';
import * as serviceWorker from './serviceWorker';

// Redux
import { store } from './js/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
