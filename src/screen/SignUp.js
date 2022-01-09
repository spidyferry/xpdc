import React, {useState} from 'react';
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

var nama, telp, email, pass;

const SignUp = () => {
  const [disableButton, setDisableButton] = useState(true);

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
          <TextInput
            style={Theme.textInput}
            placeholder="Nama"
            onChangeText={value => enableButtona(value)}
          />
        </View>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="cellphone" size={20} />
          </View>
          <TextInput
            style={Theme.textInput}
            placeholder="Telepon (08xxxxxxxxxxx)"
            onChangeText={value => enableButtonb(value)}
          />
        </View>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="email" size={20} />
          </View>
          <TextInput
            style={Theme.textInput}
            placeholder="E-mail"
            onChangeText={value => enableButtonc(value)}
          />
        </View>
        <View style={Theme.textInputContainer}>
          <View style={Theme.textInputIcon}>
            <Icon name="lock" size={20} />
          </View>
          <TextInput
            style={Theme.textInput}
            placeholder="Kata Sandi"
            onChangeText={value => enableButtond(value)}
          />
        </View>
        <TouchableOpacity
          style={
            disableButton
              ? [Theme.defaultButtonDisable, Theme.marginTop40]
              : [Theme.defaultButton, Theme.marginTop40]
          }
          onPress={() => Alert.alert('Pressed')}
          disabled={disableButton ? true : false}>
          <Text
            style={
              disableButton
                ? Theme.defaultTextButtonDisable
                : Theme.defaultTextButton
            }>
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Theme.signUpPageFooter} />
    </View>
  );

  function enableButtona(a) {
    a.length > 0 ? (nama = true) : (nama = false);
    enableButton();
  }
  function enableButtonb(b) {
    b.length > 0 ? (telp = true) : (telp = false);
    enableButton();
  }
  function enableButtonc(c) {
    c.length > 0 ? (email = true) : (email = false);
    enableButton();
  }
  function enableButtond(d) {
    d.length > 0 ? (pass = true) : (pass = false);
    enableButton();
  }

  function enableButton() {
    if (nama === true && telp === true && email === true && pass === true) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }
};

export default SignUp;
