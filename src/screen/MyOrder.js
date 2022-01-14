import React from 'react';
import {View, Text} from 'react-native';
import Theme from '../../style/Theme';

const MyOrder = () => {
  return (
    <View style={Theme.displayFlex}>
      <View style={Theme.pageHeader} />

      <View style={[Theme.pageBody, Theme.barColor]} />

      <View style={Theme.pageFooter} />
    </View>
  );
};

export default MyOrder;
