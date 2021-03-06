import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CellMenu = props => {
  const navigation = useNavigation();
  var nav = props.navigateTo;
  return (
    <Pressable onPress={() => navigation.navigate(nav)}>
      <View style={Theme.cellMenuHolder}>
        <View style={[Theme.cellMenuLeftIcon, Theme.midle]}>
          <Icon name={props.icon} size={25} />
        </View>
        <View style={[Theme.cellMenuContent, Theme.midle]}>
          <Text style={Theme.bold}>{props.title}</Text>
        </View>
        <View style={[Theme.cellMenuRightIcon, Theme.midle]}>
          <Icon name="chevron-right" size={25} />
        </View>
      </View>
    </Pressable>
  );
};

export default CellMenu;
