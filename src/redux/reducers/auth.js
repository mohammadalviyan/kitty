const initialState = {
    registerResponse: [],
    loginResponse: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
};

const Auth = (state = initialState, action) => {
    switch(action.type) {
        // ---------------Register--------------//
        case 'POST_REGISTER_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'POST_REGISTER_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false
            };
        case 'POST_REGISTER_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                registerResponse: action.payload
            };
        // ---------------Login-----------------//
        case 'POST_LOGIN_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'POST_LOGIN_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false
            };
        case 'POST_LOGIN_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                loginResponse: action.payload
            };
        default:
            return state;
    }
}

export default Auth;