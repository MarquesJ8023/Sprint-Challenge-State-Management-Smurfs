import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";

const App = props => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(App);
