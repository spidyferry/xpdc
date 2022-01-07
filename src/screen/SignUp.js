import React from 'react';
import {View, Text, Image} from 'react-native';
import Theme from '../../style/Theme';

const logo = require('../../assets/img/logo-fix-black.png');

const SignUp = () => {
  return (
    <View style={Theme.loginPageHeader}>
      <Image source={logo} style={Theme.loginPageLogo} />
      <Text>Signup untuk melanjutkan</Text>
    </View>
  );
};

export default SignUp;
