import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Searchbar} from 'react-native-paper';

const logo = require('../../assets/img/logo-fix-black.png');

const HomeHeader = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={[Theme.center, Theme.fullWidth]}>
      <View
        style={[
          Theme.navigationBar,
          Theme.midle,
          Theme.row,
          Theme.marginTop10,
        ]}>
        <View style={[Theme.navigationBarLeft, Theme.midle]}>
          <Image source={logo} style={Theme.logo} />
        </View>
        <View style={[Theme.row, Theme.navigationBarRight]}>
          <View style={Theme.displayFlex} />
          <View
            style={[
              Theme.displayFlex,
              Theme.midle,
              Theme.alignRight,
              Theme.paddingRight,
            ]}>
            <Icon name="email" size={25} />
          </View>
          <View
            style={[
              Theme.displayFlex,
              Theme.midle,
              Theme.alignRight,
              Theme.paddingRight,
            ]}>
            <Icon name="bell" size={25} />
          </View>
        </View>
      </View>

      <View style={[Theme.subNavigationBar, Theme.midle]}>
        <Text>
          Hi <Text style={Theme.bold}>{props.userName}</Text>, welcome to my
          XPDC!
        </Text>
      </View>
      <View style={Theme.subNavigationBar}>
        <Searchbar
          placeholder="Cek Resi"
          style={Theme.searchBar}
          inputStyle={Theme.searchBarText}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
