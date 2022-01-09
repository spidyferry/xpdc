import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../style/Theme';

const bg = require('../../assets/img/xpdc_bg.png');
const logo = require('../../assets/img/logo-fix-white.png');

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={Theme.displayFlex}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={Theme.loginPageBgImage}>
        <View style={Theme.loginPageHeader}>
          <Image source={logo} style={Theme.mainLogo} />
          <Text style={[Theme.textWhite, styles.marginedText]}>
            Login untuk melanjutkan
          </Text>
        </View>
        <View style={Theme.loginPageBody}>
          <View style={styles.margin40}>
            <View style={Theme.center}>
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
                <TextInput
                  secureTextEntry={hidePassword ? true : false}
                  style={Theme.textInputDoubleIcon}
                  placeholder="Kata Sandi"
                />
                <View style={Theme.textInputIcon}>
                  <Icon
                    name={hidePassword ? 'eye-off' : 'eye'}
                    size={20}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={Theme.defaultButton}
                  onPress={() => Alert.alert('Pressed')}>
                  <Text style={Theme.defaultTextButton}>Masuk</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={[styles.marginedText, Theme.hyperlink]}
                onPress={() => navigation.navigate('ForgotPassword')}>
                Lupa kata sandi?
              </Text>
              <Text style={[Theme.textWhite, styles.margin40]}>
                Tidak memiliki akun?{' '}
                <Text
                  style={[styles.marginedText, Theme.hyperlink]}
                  onPress={() => navigation.navigate('SignUp')}>
                  Daftar disini
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={Theme.loginPageFooter} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  marginedText: {
    marginTop: 10,
  },
  margin40: {
    marginTop: 40,
  },
});

export default Login;
