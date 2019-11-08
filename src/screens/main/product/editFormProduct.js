import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Item, Input, Form } from 'native-base';

import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../redux/actions/product';

const EditProduct = (props) => {
    const {navigation}=props;
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
      dispatch(updateProduct (input))
      .then(response => {
        if (response.value.data.status === 200) {
            props.navigation.navigate('IndexMain')
        } else {
            alert(response.value.data.message);
        }
      })
      .catch(error => alert(error));
    };

    useEffect(()=>{
        setInput(navigation.state.params.list);
    },[])

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
                      onChangeText={(text) => setInput({...input, name: text })} value={input.name}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Description" 
                      onChangeText={(text) => setInput({...input, description: text })} value={input.description}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Image" 
                      onChangeText={(text) => setInput({...input, image: text })} value={input.image}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Quantity" 
                      onChangeText={(text) => setInput({...input, quantity: text })} value={input.quantity}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Price" 
                      onChangeText={(text) => setInput({...input, price: text })} value={input.price}/>
                  </Item>
                  <Item>
                  <Input placeholder="Insert Category" 
                      onChangeText={(text) => setInput({...input, category_id: text })} value={input.category_id}/>
                  </Item>
                  <Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#fbb130"}}
                    onPress={handleSubmit} rounded>
                    <Text style={{fontWeight:"bold",fontSize: 17}}>Update </Text>
                  </Button>
              </Form>
              </View>
            </View>
        </View>
    );
}

export default EditProduct;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    }
  });
  