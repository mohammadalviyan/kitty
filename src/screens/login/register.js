import React, { useState } from 'react';
import {         // Renders text
  View,
  Image        // Container component
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Button, Text, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { onRegister } from '../../redux/actions/auth';

import styles from './styles';

const Register = (props) => {

  const initialState = {
    username: '',
    password: '',
    user_role: 'admin'
  };

  const [dataRegister, setDataRegister] = useState(initialState);

  const handleRegister = () => {
    props.dispatch(onRegister(dataRegister))
        .then((response) => {
          if (response.value.data.status === 200) {
            alert(response.value.data.result);
            props.navigation.navigate('Login');
          } else {
            alert(response.value.data.message);
          }
        })
        .catch(error => {
          alert(error.value.data.message)
        })
  }

  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.txtTitleLogin}>Kitty.</Text>
        <Image style={styles.imgUiLogin} source={require("../../assets/images/cake_ui.png")} />
        <Item style={styles.itemField} rounded>
          <Input 
            placeholder='Username' 
            style={styles.itemInputTxt} 
            value={dataRegister.username}
            onChangeText={(text) => {setDataRegister({...dataRegister, username: text})}}
            returnKeyType={"next"}
          />
        </Item>
        <Item style={styles.itemField} rounded>
          <Input 
            placeholder='Password' 
            style={styles.itemInputPass}
            secureTextEntry={true} 
            value={dataRegister.password}
            onChangeText={(text) => {setDataRegister({...dataRegister, password: text})}}
            returnKeyType={"go"}
          />
        </Item>
        <Button style={styles.btnRegisterReg} onPress={()=>{handleRegister()}}>
          <Text style={styles.textbtn}>Register</Text>
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  response: state.auth.registerResponse
})

export default connect(mapStateToProps)(Register);