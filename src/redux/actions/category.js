import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const token = AsyncStorage.getItem("token");
const headers = {
    "x-access-token": token
}
export const getCategories = (data) => {
    return{
        type: 'GET_CATEGORIES',
        payload: axios.get('https://sweet-bread.herokuapp.com/category', {params: data, headers: headers})
    };
};

export const postCategory = (input) => {
    return{
        type: 'POST_CATEGORIES',
        payload: axios.post('https://sweet-bread.herokuapp.com/category', input, {headers: headers})
    };
};

export const updateCategory = (input) => {
    return{
        type: 'UPDATE_CATEGORIES',
        payload: axios.put(`https://sweet-bread.herokuapp.com/category/${input.category_id}`, input, {headers: headers})
    };
};

export const deleteCategory = (input) => {
    return{
        type: 'DELETE_CATEGORIES',
        payload: axios.delete(`https://sweet-bread.herokuapp.com/category/${input.category_id}`, {headers: headers})
    };
};