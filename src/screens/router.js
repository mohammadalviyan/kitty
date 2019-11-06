import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Boarding from './onboarding/index';
import UI from './login/index';
import Login from './login/login';
import Register from './login/register';
import Dashboard from './main/index';

const StackAuth = createStackNavigator({
    UI,
    Login,
    Register
},
{
    initialRouteName: "UI",
    headerMode: "none"
});

const Router = createSwitchNavigator({
    Boarding,
    StackAuth,
    Dashboard
},
{
    initialRouteName: "Boarding",
    headerMode: "none"
})

export default createAppContainer(Router);