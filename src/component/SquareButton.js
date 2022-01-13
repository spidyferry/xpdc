import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Theme from '../../style/Theme';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SquareButton = props => {
  const navigation = useNavigation();
  var nav = props.navigateTo;
  return (
    <Pressable onPress={() => navigation.navigate(nav)}>
      <View style={[Theme.bigMenuButton, Theme.midle]}>
        <View style={Theme.center}>
          <Icon name={props.icon} size={40} style={Theme.textWhite} />
          <Text
            style={[
              Theme.bold,
              Theme.textWhite,
              Theme.textCenter,
              Theme.smallNote,
            ]}>
            {props.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SquareButton;
