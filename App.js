import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/screens/router';
// import MainIndex from './src/screens/main/index';
import { StatusBar } from "react-native";

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render(){
    return (
      <Provider store={store}>
        <Router />
        {/* <MainIndex /> */}
      </Provider>
    );
  }
};
