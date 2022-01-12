import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CellMenuDoubleLine = props => {
  const navigation = useNavigation();
  var nav = props.navigateTo;
  return (
    <Pressable onPress={() => navigation.navigate(nav)}>
      <View style={Theme.cellMenuHolderBig}>
        <View style={[Theme.cellMenuLeftIconBig, Theme.midle]}>
          <Icon name={props.icon} size={25} />
        </View>
        <View style={[Theme.cellMenuContentBig, Theme.midle]}>
          <Text style={[Theme.bold]}>{props.title}</Text>
          <Text>{props.detail}</Text>
        </View>
        <View style={[Theme.cellMenuRightIconBig, Theme.midle]}>
          <Icon name="chevron-right" size={25} />
        </View>
      </View>
    </Pressable>
  );
};

export default CellMenuDoubleLine;
