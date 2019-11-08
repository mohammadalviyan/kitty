import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

let token; 
AsyncStorage.getItem("token").then(jwt => {token = jwt});

export const getCategories = (data) => {
    return{
        type: 'GET_CATEGORIES',
        payload: axios.get('https://sweet-bread.herokuapp.com/category', {params: data, headers: {'x-access-token': token}})
    };
};

export const postCategory = (input) => {
    return{
        type: 'POST_CATEGORIES',
        payload: axios.post('https://sweet-bread.herokuapp.com/category', input, {headers: {'x-access-token': token}})
    };
};

export const updateCategory = (input) => {
    console.log(input.category_id)
    return{
        type: 'UPDATE_CATEGORIES',
        payload: axios.put(`https://sweet-bread.herokuapp.com/category/${input.category_id}`, input, {headers: {'x-access-token': token}})
    };
};

export const deleteCategory = (input) => {
    const id=input
    return{
        type: 'DELETE_CATEGORIES',
        payload: axios.delete(`https://sweet-bread.herokuapp.com/category/`+id, {headers: {'x-access-token': token}})
    };
};