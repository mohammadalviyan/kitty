import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Boarding from './src/screens/onboarding/index';

import { AppRegistry, StatusBar } from "react-native";

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render(){
    return (
      <Provider store={store}>
        <Boarding />
      </Provider>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
