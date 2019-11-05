import axios from 'axios';

export const onRegister = (input) => {
    return{
        type: 'POST_REGISTER',
        payload: axios.post('https://sweet-bread.herokuapp.com/user/register', input)
    };
};

export const onLogin = (input) => {
    return{
        type: 'POST_LOGIN',
        payload: axios.post('https://sweet-bread.herokuapp.com/user/login', input)
    };
};