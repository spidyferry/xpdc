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
import ChangeName from './src/screen/ChangeName';
import ChangePhone from './src/screen/ChangePhone';
import ChangeEmail from './src/screen/ChangeEmail';
import ChangePassword from './src/screen/ChangePassword';
import Address from './src/screen/Address';
import NewOrder from './src/screen/NewOrder';

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
        <Stack.Screen
          name="ChangeName"
          component={ChangeName}
          options={{title: 'Ubah Nama Pengguna'}}
        />
        <Stack.Screen
          name="ChangePhone"
          component={ChangePhone}
          options={{title: 'Ubah Nomor Telepon'}}
        />
        <Stack.Screen
          name="ChangeEmail"
          component={ChangeEmail}
          options={{title: 'Ubah Email'}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{title: 'Ubah Kata Sandi'}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{title: 'Alamat'}}
        />
        <Stack.Screen
          name="NewOrder"
          component={NewOrder}
          options={{title: 'Pesan Layanan'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
