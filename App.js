import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import Main from './src/screen/Main';
import SignUp from './src/screen/SignUp';
import ForgotPassword from './src/screen/ForgotPassword';
import TermCondition from './src/screen/TermCondition';
import Privacy from './src/screen/Privacy';
import Cookies from './src/screen/Cookies';
import ProfileSetting from './src/screen/ProfileSetting';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Pendaftaran Akun'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: 'Lupa Kata Sandi'}}
        />
        <Stack.Screen
          name="TermCondition"
          component={TermCondition}
          options={{title: 'Syarat dan Ketentuan Pengiriman'}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{title: 'Kebijakan Privacy'}}
        />
        <Stack.Screen
          name="Cookies"
          component={Cookies}
          options={{title: 'Kebijakan Cookie'}}
        />
        <Stack.Screen
          name="ProfileSetting"
          component={ProfileSetting}
          options={{title: 'Pengaturan Akun'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
