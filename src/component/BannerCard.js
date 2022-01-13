import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Theme from '../../style/Theme';

let screen = Dimensions.get('window').width;

const BannerCard = () => {
  return (
    <View
      style={[Theme.center, Theme.midle, Theme.bannerCard, styles.screenWidth]}>
      <Text>Banner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWidth: {
    // width: screen,
    width: 350,
  },
});

export default BannerCard;
