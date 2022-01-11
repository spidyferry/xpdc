import React from 'react';
import {View, Text} from 'react-native';
import Theme from '../../style/Theme';
import HomeHeader from '../component/HomeHeader';

const Home = () => {
  return (
    <View style={Theme.displayFlex}>
      <View style={[Theme.pageHeader, Theme.center]}>
        <HomeHeader userName="Ferry Sugianto" />
      </View>
      <View style={[Theme.pageBody, Theme.center]}>
        <Text>Body</Text>
      </View>
      <View style={[Theme.pageFooter, Theme.center]}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Home;
