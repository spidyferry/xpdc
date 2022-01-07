import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const logo = require('../../assets/img/logo-fix-black.png');

const SignUp = () => {
  return (
    <View style={Theme.displayFlex}>
      <View style={[Theme.signUpPageHeader, Theme.center, Theme.midle]}>
        <Image source={logo} style={Theme.mainLogo} />
      </View>
      <View style={[Theme.signUpPageBody, Theme.center]}>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="account-circle" size={20} />
          </View>
          <TextInput style={Theme.textInput} placeholder="Nama" />
        </View>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="cellphone" size={20} />
          </View>
          <TextInput
            style={Theme.textInput}
            placeholder="Telepon (08xxxxxxxxxxx)"
          />
        </View>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="email" size={20} />
          </View>
          <TextInput style={Theme.textInput} placeholder="E-mail" />
        </View>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="lock" size={20} />
          </View>
          <TextInput style={Theme.textInput} placeholder="Kata Sandi" />
        </View>
        <TouchableOpacity
          style={[Theme.defaultButton, Theme.marginTop40]}
          onPress={() => Alert.alert('Pressed')}>
          <Text style={Theme.defaultTextButton}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <View style={Theme.signUpPageFooter} />
    </View>
  );
};

export default SignUp;
