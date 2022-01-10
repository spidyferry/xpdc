import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import MyOrder from './MyOrder';
import NewOrder from './NewOrder';
import PriceCheck from './PriceCheck';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

function Main({navigation}) {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="white">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          tabBarLabel: 'Order Saya',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="file-document-edit"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewOrder"
        component={NewOrder}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="truck" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PriceCheck"
        component={PriceCheck}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calculator-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
