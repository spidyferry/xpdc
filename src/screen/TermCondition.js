import React from 'react';
import {View, Text, Image} from 'react-native';
import Theme from '../../style/Theme';

const TermCondition = () => {
  const logo = require('../../assets/img/logo-fix-black.png');
  return (
    <View style={[Theme.displayFlex, Theme.center]}>
      <View style={[Theme.pageHeader, Theme.midle]}>
        <Image source={logo} style={[Theme.mainLogo]} />
      </View>
      <View style={[Theme.pageBody, Theme.safeWidth]}>
        <View>
          <Text style={[Theme.bold, Theme.subTitle]}>
            Syarat dan Ketentuan Pengiriman
          </Text>
          <Text style={Theme.marginTop20}>Isi kebijakan</Text>
        </View>
      </View>
    </View>
  );
};

export default TermCondition;
