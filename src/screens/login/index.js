import React, { Component } from 'react';
import {         // Renders text
  View,
  Image          // Container component
} from 'react-native';
import { Button, Text } from 'native-base';

import styles from './styles';

export default class UI extends Component {
  render() {
    return (
      <View style={styles.wrap} navigation={this.props.navigation}>
        <View>
          <Text style={styles.txtTitle}>Kitty.</Text>
          <Image style={styles.imgUi} source={require("../../assets/images/cake_ui.png")} />
          <Button style={styles.btnLogin} onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={styles.textbtn}>Login</Text>
          </Button>
          <Button style={styles.btnRegister}>
            <Text style={styles.textbtn} onPress={() => this.props.navigation.navigate("Register")}>Register</Text>
          </Button>
        </View>
      </View>
    );
  }
}