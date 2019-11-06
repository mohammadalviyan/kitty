import React, { Component } from 'react';
import {         // Renders text
  View,
  Image          // Container component
} from 'react-native';
import { Button, Text, Item, Input } from 'native-base';

import styles from './styles';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <View>
          <Text style={styles.txtTitleLogin}>Kitty.</Text>
          <Image style={styles.imgUiLogin} source={require("../../assets/images/cake_ui.png")} />
          <Item style={styles.itemField} rounded>
            <Input placeholder='Username' style={styles.itemInputTxt} />
          </Item>
          <Item style={styles.itemField} rounded>
            <Input placeholder='Password' style={styles.itemInputPass} />
          </Item>
          <Button style={styles.btnRegisterReg}>
            <Text style={styles.textbtn}>Register</Text>
          </Button>
        </View>
      </View>
    );
  }
}