import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import "./index.css";
import App from "./components/App";


 const store = createStore(reducer, applyMiddleware(thunk));


 const rootElement = document.getElementById('root');
 ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
   rootElement
 );
