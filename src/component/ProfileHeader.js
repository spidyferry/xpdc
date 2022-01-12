import React from 'react';
import {View, Text} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileHeader = props => {
  return (
    <View style={Theme.center}>
      <Icon name="account-circle" size={100} />
      <Text style={[Theme.subTitle, Theme.bold]}>{props.name}</Text>
      <Text style={Theme.subTitle2}>{props.email}</Text>
    </View>
  );
};

export default ProfileHeader;
