import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './dashboard/dashboard';
import Product from './product/product';
import Category from './category/category';
import History from './history/history';
import Profile from './profile/profile';

const TabNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Dashboard'
        }
    },
    Product: {
      screen: Product,
      navigationOptions: {
        tabBarLabel: 'Product'
      }
    },
    Category: {
      screen: Category,
      navigationOptions: {
        tabBarLabel: 'Category',
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      }
    },
  },{
    //router config
    initialRouteName: 'Dashboard',
    order: ['Dashboard','Product','Category','History', 'Profile'],
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({focused}) => {
        const { routeName } = navigation.state;
        let focus = focused ? {width: 27, height: 27} : {width: 26, height: 26};
        let sourceImage;
        
        if (routeName === 'Dashboard') {
            sourceImage = focused ? require('../../assets/icon/icon-home.png') : require('../../assets/icon/icon-home.png');
        } else if (routeName === 'Product') {
            sourceImage = focused ? require('../../assets/icon/icon-product.png') : require('../../assets/icon/icon-product.png');
        } else if (routeName === 'Category') {
            sourceImage = focused ? require('../../assets/icon/icon-category.png') : require('../../assets/icon/icon-category.png');
        } else if (routeName === 'History') {
            sourceImage = focused ? require('../../assets/icon/icon-history.png') : require('../../assets/icon/icon-history.png');
        } else {
            sourceImage = focused ? require('../../assets/icon/icon-account.png') : require('../../assets/icon/icon-account.png');
        }
        
        return <Image style={focus} source={sourceImage} />;
      },
      tabBarOptions: {
        activeTintColor: '#80A6AD',
        inactiveTintColor: 'grey',
        style: {
          borderTopWidth: 0,
        }
      },   
    }),
  })
  
  const TabNavigation = createAppContainer(TabNavigator);
  export default TabNavigation;