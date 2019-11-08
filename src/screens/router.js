import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Boarding from './onboarding/index';
import UI from './login/index';
import Login from './login/login';
import Register from './login/register';
import IndexMain from './main/index';
import AddCategory from './main/category/addFormCategory';
import EditCategory from './main/category/editFormCategory';
import AddProduct from './main/product/addFormProduct';
import EditProduct from './main/product/editFormProduct';

const StackAuth = createStackNavigator({
    UI,
    Login,
    Register
},
{
    initialRouteName: "UI",
    headerMode: "none"
});

const StackHome = createStackNavigator({
    IndexMain,
    AddCategory,
    EditCategory,
    AddProduct,
    EditProduct
},
{
    initialRouteName: "IndexMain",
    headerMode: "none"
});

const Router = createSwitchNavigator({
    Boarding,
    StackAuth,
    StackHome
},
{
    initialRouteName: "Boarding",
    headerMode: "none"
})

export default createAppContainer(Router);