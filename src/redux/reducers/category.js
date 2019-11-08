// Initial state
const initialState = {
    categoryList: [],
    isLoading: false,
    isRejected: false,
    isFullfilled: false
}

// Get category reducer
const Category = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CATEGORIES_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
            };
        case 'GET_CATEGORIES_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
            };
        case 'GET_CATEGORIES_FULFILLED':   
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                categoryList: action.payload.data.result.data
            };
        //-------------------POST----------------
        case 'POST_CATEGORIES_PENDING':   
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
        };
        case 'POST_CATEGORIES_REJECTED':   
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
        };
        case 'POST_CATEGORIES_FULFILLED':
            const pushNew = state.categoryList.slice(0)
            pushNew.push(action.payload.data.result[0])
            console.log(pushNew)   
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                categoryList: pushNew
        };
        //-------------------Update----------------
        case 'UPDATE_CATEGORIES_PENDING':   
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
        };
        case 'UPDATE_CATEGORIES_REJECTED':   
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
        };
        case 'UPDATE_CATEGORIES_FULFILLED':
            const categoryListAfterPatch = state.categoryList.map(category => {
                if (category.category_id === action.payload.data.result[0].category_id) {
                    return action.payload.data.result[0];
                }
                return category
            })  
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                categoryList: categoryListAfterPatch
        };
        // -----------------DELETE-------------------
        case 'DELETE_CATEGORIES_PENDING':   
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFullfilled: false
        };
        case 'DELETE_CATEGORIES_REJECTED':   
            return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFullfilled: false
        };
        case 'DELETE_CATEGORIES_FULFILLED':
            const dataAfterDelete = state.categoryList.filter(function(value, index, arr){
                return value.category_id != action.payload.data.result.category_id
            }) 
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFullfilled: true,
                categoryList: dataAfterDelete
        };
        default: 
            return state;
    }
}

export default Category;