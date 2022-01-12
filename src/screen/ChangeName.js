import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Theme from '../../style/Theme';

const ChangeName = () => {
  return (
    <View style={[Theme.displayFlex, Theme.center]}>
      <View style={[Theme.safeWidth, Theme.marginTop40]}>
        <Text style={Theme.bold}>Nama Pengguna</Text>
      </View>
      <View style={Theme.textInputContainer}>
        <TextInput style={Theme.textInput} placeholder="Ferry Sugianto" />
      </View>
      <View style={Theme.marginTop40}>
        <TouchableOpacity style={Theme.defaultButton}>
          <Text style={Theme.defaultTextButton}>Ubah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeName;
