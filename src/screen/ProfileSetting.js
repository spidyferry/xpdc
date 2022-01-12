import React from 'react';
import {View} from 'react-native';
import Theme from '../../style/Theme';
import CellMenuDoubleLine from '../component/CellMenuDoubleLine';
import CellMenu from '../component/CellMenu';

const ProfileSetting = ({navigation}) => {
  return (
    <View style={Theme.displayFlex}>
      <CellMenuDoubleLine
        icon="shield-account"
        title="Nama"
        detail="Ferry Sugianto"
      />
      <CellMenuDoubleLine
        icon="shield-account"
        title="Nomor Telepon"
        detail="089668273333"
      />
      <CellMenuDoubleLine
        icon="shield-account"
        title="E-Mail"
        detail="1988ferry@gmail.com"
      />
      <CellMenu icon="shield-account" title="Password" />
    </View>
  );
};

export default ProfileSetting;
