import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Theme from '../../style/Theme';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NearestAgentCard = props => {
  const map = require('../../assets/img/map.png');
  const navigation = useNavigation();
  var nav = props.navigateTo;
  return (
    <Pressable onPress={() => navigation.navigate(nav)}>
      <View style={Theme.nearestAgentCardHolder}>
        <View style={[Theme.nearestAgentCardIcon, Theme.midle, Theme.center]}>
          <Image source={map} />
        </View>
        <View
          style={[
            Theme.nearestAgentCardContent,
            Theme.midle,
            Theme.marginLeft10,
          ]}>
          <Text style={Theme.bold}>{props.title}</Text>
          <Text>
            <Icon name="google-maps" size={18} /> {props.detail}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NearestAgentCard;
