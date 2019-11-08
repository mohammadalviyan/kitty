import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const token = AsyncStorage.getItem("token");
const headers = {
    "x-access-token": token
}
export const getProducts = () => {
    return{
        type: 'GET_PRODUCTS',
        payload: axios.get('https://sweet-bread.herokuapp.com/product', {headers: headers})
    };
};

export const postProduct = (input) => {
    return{
        type: 'POST_PRODUCTS',
        payload: axios.post('https://sweet-bread.herokuapp.com/product', input, {headers: headers})
    };
};

export const updateProduct = (input) => {
    return{
        type: 'UPDATE_PRODUCTS',
        payload: axios.put(`https://sweet-bread.herokuapp.com/product/${input.product_id}`, input, {headers: headers})
    };
};

export const deleteProducts = (input) => {
    return{
        type: 'DELETE_PRODUCTS',
        payload: axios.delete(`https://sweet-bread.herokuapp.com/product/${input.product_id}`, {headers: headers})
    };
};