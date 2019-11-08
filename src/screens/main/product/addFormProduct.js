import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Item, Input, Form } from 'native-base';

import { useDispatch } from 'react-redux';
import { postProduct } from '../../../redux/actions/product';

const AddFormProduct = (props) => {
    const dispatch = useDispatch();
    const initialState = {
        name: '',
        description: '',
        image: '',
        category_id: '',
        quantity: '',
        price: ''
    }

    const [input, setInput] = useState(initialState);

    const handleSubmit = async (event) => {
      dispatch(postProduct (input))
      .then(response => {
        if (response.value.data.status === 200) {
            props.navigation.navigate('IndexMain')
        } else {
            alert(response.value.data.message);
        }
      })
      .catch(error => alert(error));
    };

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'column'}}>
              <View style={{marginHorizontal: 17, marginTop: 10, height: 100, flexDirection: 'column', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => props.navigation.navigate("IndexMain")}>
                <Image style={{width: 35, height: 35}} source={require('../../../assets/icon/icon-add.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Product</Text>
              </View>
              <View>
              <Form>
                  <Item>
                    <Input placeholder="Insert Name" 
                      onChangeText={(text) => setInput({...input, name: text })}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Description" 
                      onChangeText={(text) => setInput({...input, description: text })}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Image" 
                      onChangeText={(text) => setInput({...input, image: text })}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Quantity" 
                      onChangeText={(text) => setInput({...input, qty: text })}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Price" 
                      onChangeText={(text) => setInput({...input, price: text })}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Category" 
                      onChangeText={(text) => setInput({...input, category_id: text })}/>
                  </Item>
                  <Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#fbb130"}}
                    onPress={handleSubmit} rounded>
                    <Text style={{fontWeight:"bold",fontSize: 17}}>Add </Text>
                  </Button>
              </Form>
              </View>
            </View>
        </View>
    );
}

export default AddFormProduct;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    }
  });
  