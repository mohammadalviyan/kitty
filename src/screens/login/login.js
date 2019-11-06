import React, { useState } from 'react';
import {         // Renders text
  View,
  Image,          // Container component
  AsyncStorage
} from 'react-native';
import { Button, Text, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { onLogin } from '../../redux/actions/auth';

import styles from './styles';

const Login = (props) => {

  const initialState = {
    username: '',
    password: ''
  };

  const [dataLogin, setDataLogin] = useState(initialState);

  const handleLogin = () => {
    props.dispatch(onLogin(dataLogin))
        .then((response) => {
          if (response.value.data.status === 200) {
            AsyncStorage.setItem('token', response.value.data.result.token, () => {});
            AsyncStorage.setItem('user', response.value.data.result.username, () => {});
            alert("Welcome back " + response.value.data.result.username);
            props.navigation.navigate('Dashboard');
          } else {
            alert(response.value.data.message);
          }
        })
        .catch(error => {
          alert(error.value.data.message)
        })
  }

  AsyncStorage.getItem('token', () => {}).then((token) => {if (token !== null) props.navigation.navigate('Dashboard');});
  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.txtTitleLogin}>Kitty.</Text>
        <Image style={styles.imgUiLogin} source={require("../../assets/images/cake_ui.png")} />
        <Item style={styles.itemField} rounded>
          <Input 
            placeholder='Username' 
            style={styles.itemInputTxt} 
            value={dataLogin.username}
            onChangeText={(text) => {setDataLogin({...dataLogin, username: text})}}
            returnKeyType={"next"}
            />
        </Item>
        <Item style={styles.itemField} rounded>
          <Input 
            placeholder='Password' 
            style={styles.itemInputPass} 
            secureTextEntry={true} 
            value={dataLogin.password}
            onChangeText={(text) => {setDataLogin({...dataLogin, password: text})}}
            returnKeyType={"go"}
            />
        </Item>
        <Button style={styles.btnLoginLog} onPress={()=>{handleLogin()}}>
          <Text style={styles.textbtn}>Login</Text>
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  response: state.auth.loginResponse
})

export default connect(mapStateToProps)(Login);