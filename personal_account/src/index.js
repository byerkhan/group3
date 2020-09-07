import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes/Routes';
import './styles/globalStyle.css';




render(
    <Routes />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
