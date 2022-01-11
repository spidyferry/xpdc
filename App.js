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
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="TermCondition" component={TermCondition} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Cookies" component={Cookies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
