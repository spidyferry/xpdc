import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Theme from '../../style/Theme';

const ChangeEmail = () => {
  return (
    <View style={[Theme.displayFlex, Theme.center]}>
      <View style={[Theme.safeWidth, Theme.marginTop40]}>
        <Text style={Theme.bold}>E-Mail Terdaftar</Text>
      </View>
      <View style={Theme.textInputContainer}>
        <TextInput
          style={[Theme.textInput, Theme.marginLeft10]}
          placeholder="1988ferry@gmail.com"
        />
      </View>
      <View style={Theme.marginTop40}>
        <TouchableOpacity style={Theme.defaultButton}>
          <Text style={Theme.defaultTextButton}>Ubah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeEmail;
