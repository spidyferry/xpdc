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

const ForgotPassword = () => {
  const [disableButton, setDisableButton] = useState(true);

  return (
    <View style={Theme.displayFlex}>
      <View style={[Theme.signUpPageHeader, Theme.center, Theme.midle]}>
        <Image source={logo} style={Theme.mainLogo} />
      </View>
      <View style={[Theme.signUpPageBody, Theme.center]}>
        <Text>Masukkan email anda untuk reset kata sandi:</Text>
        <View style={[Theme.textInputContainer, Theme.marginTop40]}>
          <View style={Theme.textInputIcon}>
            <Icon name="email" size={20} />
          </View>
          <TextInput
            style={Theme.textInput}
            placeholder="E-mail"
            onChangeText={value =>
              value.length > 0
                ? setDisableButton(false)
                : setDisableButton(true)
            }
          />
        </View>
        <Text>Reset link akan dikirimkan ke email anda.</Text>
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
            Kirim
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Theme.signUpPageFooter} />
    </View>
  );
};

export default ForgotPassword;
