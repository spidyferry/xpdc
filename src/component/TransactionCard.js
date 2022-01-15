import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TransactionCard = props => {
  return (
    <View style={[styles.cardContainer, Theme.safeWidth, Theme.marginTop10]}>
      <View style={[styles.headerCard, Theme.row]}>
        <View style={[styles.headerCardLeft, Theme.center, Theme.midle]}>
          <Icon name={props.icon} size={25} />
        </View>
        <View style={[styles.headerCardCenter, Theme.midle]}>
          <Text style={Theme.bold}>{props.transaction}</Text>
          <Text style={Theme.smallNote}>{props.date}</Text>
        </View>

        <View style={[styles.headerCardStatus, Theme.midle]}>
          <Text style={[Theme.smallNote, styles.cardStatusSuccess]}>
            Berhasil
          </Text>
        </View>
        <View style={[styles.headerCardRight, Theme.midle]}>
          <Icon name="dots-vertical" size={20} />
        </View>
      </View>
      <View style={[styles.bodyCard, Theme.row, Theme.midle]}>
        <View style={[styles.bodyCardRight, Theme.midle, Theme.marginLeft10]}>
          <Text style={Theme.smallNote}>Total</Text>
          <Text style={Theme.bold}>Rp. {props.total} ,-</Text>
        </View>
        <View style={[styles.bodyCardLeft, Theme.midle]}>
          <Text style={Theme.bold}>{props.destination}</Text>
          <Text style={Theme.smallNote}>{props.receiver}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 110,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#afafaf',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headerCard: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  headerCardLeft: {
    flex: 4,
  },
  headerCardCenter: {
    flex: 12,
  },
  headerCardRight: {
    flex: 3,
  },
  headerCardStatus: {
    flex: 6,
  },
  cardStatusSuccess: {
    width: 60,
    height: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    backgroundColor: 'green',
    color: 'white',
  },
  bodyCard: {
    height: 60,
  },
  bodyCardLeft: {
    flex: 9,
  },
  bodyCardRight: {
    flex: 7,
  },
});

export default TransactionCard;
