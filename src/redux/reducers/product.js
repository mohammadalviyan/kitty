// Initial state
const initialState = {
    productList: [],
    isLoading: false,
    isRejected: false,
    isFullfilled: false
}

// Get product reducer
const Products = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
            };
        case 'GET_PRODUCTS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
            };
        case 'GET_PRODUCTS_FULFILLED':  
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                productList: action.payload.data.result.rows
            };
        case 'POST_PRODUCTS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
            };
        case 'POST_PRODUCTS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
            };
        case 'POST_PRODUCTS_FULFILLED': 
            const newProduct = state.productList.slice(0)
            newProduct.push(action.payload.data.result[0])  
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                productList: newProduct
            };
        //-------------------Update----------------
        case 'UPDATE_PRODUCTS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
            };
        case 'UPDATE_PRODUCTS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
            };
        case 'UPDATE_PRODUCTS_FULFILLED':
            const productListAfterPatch = state.productList.map(product => {
                if (product.product_id === action.payload.data.result[0].product_id) {
                    return action.payload.data.result[0];
                }
                return product
            })  
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                productList: productListAfterPatch
        };
        // -----------------DELETE-------------------
        case 'DELETE_PRODUCTS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
            };
        case 'DELETE_PRODUCTS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
            };
        case 'DELETE_PRODUCTS_FULFILLED':
            const dataAfterDelete = state.productList.filter(function(value, index, arr){
                return value.product_id != action.payload.data.result.product_id
            }) 
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                productList: dataAfterDelete
        };
        default: 
            return state;
    }
}

export default Products;