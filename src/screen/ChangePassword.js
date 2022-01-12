import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChangePassword = () => {
  return (
    <View style={[Theme.displayFlex, Theme.center]}>
      <View style={[Theme.safeWidth, Theme.marginTop40]}>
        <Text style={Theme.bold}>Kata sandi lama</Text>
      </View>
      <View style={Theme.textInputContainer}>
        <View style={Theme.textInputIcon}>
          <Icon name="lock" size={20} />
        </View>
        <TextInput style={Theme.textInput} placeholder="Kata Sandi Lama" />
      </View>
      <View style={[Theme.safeWidth, Theme.marginTop40]}>
        <Text style={Theme.bold}>Masukkan kata sandi baru</Text>
      </View>
      <View style={Theme.textInputContainer}>
        <View style={Theme.textInputIcon}>
          <Icon name="lock" size={20} />
        </View>
        <TextInput style={Theme.textInput} placeholder="Kata Sandi Baru" />
      </View>
      <View style={[Theme.safeWidth, Theme.center]}>
        <Text style={Theme.center}>Ulangi kata sandi</Text>
      </View>
      <View style={Theme.textInputContainer}>
        <View style={Theme.textInputIcon}>
          <Icon name="lock" size={20} />
        </View>
        <TextInput style={Theme.textInput} placeholder="Ulangi Kata Sandi" />
      </View>
      <View style={Theme.marginTop40}>
        <TouchableOpacity style={Theme.defaultButton}>
          <Text style={Theme.defaultTextButton}>Ubah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
