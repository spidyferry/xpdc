import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Theme from '../../style/Theme';
import TransactionCard from '../component/TransactionCard';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyOrder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={Theme.displayFlex}>
      <View
        style={[Theme.pageHeader, Theme.barYellow, Theme.midle, Theme.center]}>
        <View style={[Theme.subNavigationBar, Theme.marginTop40]}>
          <Searchbar
            placeholder="Cari Transaksi"
            style={Theme.searchBar}
            inputStyle={Theme.searchBarText}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={[Theme.fullWidth, Theme.row, Theme.midle]}>
          <View style={Theme.textInputContainerSmall}>
            <TextInput style={Theme.textInputDoubleIcon} placeholder="Status" />
            <View style={Theme.textInputIconSmall}>
              <Icon name="chevron-down" size={20} />
            </View>
          </View>
          <View style={Theme.textInputContainerSmall}>
            <TextInput
              style={Theme.textInputDoubleIcon}
              placeholder="Layanan"
            />
            <View style={Theme.textInputIconSmall}>
              <Icon name="chevron-down" size={20} />
            </View>
          </View>
          <View style={Theme.textInputContainerSmall}>
            <TextInput
              style={Theme.textInputDoubleIcon}
              placeholder="Tanggal"
            />
            <View style={Theme.textInputIconSmall}>
              <Icon name="chevron-down" size={20} />
            </View>
          </View>
        </View>
      </View>

      <View style={[Theme.pageBody, Theme.center, Theme.fullWidth]}>
        <TransactionCard
          icon="airplane"
          transaction="Kargo Udara"
          date="06 September 2020"
          total="200.000.000"
          destination="Jakarta Selatan"
          receiver="PT. McDermott Indonesia"
        />
        <TransactionCard
          icon="ferry"
          transaction="Kargo Laut"
          date="01 Desember 2020"
          total="60.000.000"
          destination="Pekanbaru"
          receiver="PT. Pertamina Hulu"
        />
      </View>
    </View>
  );
};

export default MyOrder;
