import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

let token; 
AsyncStorage.getItem("token").then(jwt => {token = jwt});

export const getProducts = () => {
    return{
        type: 'GET_PRODUCTS',
        payload: axios.get('https://sweet-bread.herokuapp.com/product', {headers: {'x-access-token': token}})
    };
};

export const postProduct = (input) => {
    return{
        type: 'POST_PRODUCTS',
        payload: axios.post('https://sweet-bread.herokuapp.com/product', input, {headers: {'x-access-token': token}})
    };
};

export const updateProduct = (input) => {
    return{
        type: 'UPDATE_PRODUCTS',
        payload: axios.put(`https://sweet-bread.herokuapp.com/product/${input.product_id}`, input, {headers: {'x-access-token': token}})
    };
};

export const deleteProducts = (input) => {
    const id=input
    return{
        type: 'DELETE_PRODUCTS',
        payload: axios.delete(`https://sweet-bread.herokuapp.com/product/`+id, {headers: {'x-access-token': token}})
    };
};