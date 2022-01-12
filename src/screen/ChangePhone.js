import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Theme from '../../style/Theme';

const ChangePhone = () => {
  return (
    <View style={[Theme.displayFlex, Theme.center]}>
      <View style={[Theme.safeWidth, Theme.marginTop40]}>
        <Text style={Theme.bold}>Nomor Telepon</Text>
      </View>
      <View style={Theme.textInputContainer}>
        <TextInput
          style={[Theme.textInput, Theme.marginLeft10]}
          placeholder="089327393333"
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

export default ChangePhone;
