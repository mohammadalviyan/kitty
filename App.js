import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/screens/router';

import { AppRegistry, StatusBar } from "react-native";

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render(){
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
