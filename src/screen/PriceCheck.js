import React, {useState} from 'react';
import {View, Text, TextInput, Switch, TouchableOpacity} from 'react-native';
import Theme from '../../style/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PriceCheck = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [hasInsurance, setHasInsurance] = useState(false);
  const enableDimension = () => setIsEnabled(previousState => !previousState);
  const enableInsurance = () =>
    setHasInsurance(previousState => !previousState);
  return (
    <View style={Theme.displayFlex}>
      <View style={[Theme.pageHeader, Theme.center, Theme.midle]}>
        <Text style={[Theme.subTitle, Theme.bold, Theme.marginTop40]}>
          Cek Tarif
        </Text>
      </View>

      <View style={[Theme.pageBody, Theme.center]}>
        <View style={Theme.textInputContainer}>
          <TextInput
            style={[Theme.textInputDoubleIcon]}
            placeholder="Asal Pengiriman"
          />
          <View style={Theme.textInputIcon}>
            <Icon name="chevron-down" size={20} />
          </View>
        </View>
        <View style={Theme.textInputContainer}>
          <TextInput
            style={Theme.textInputDoubleIcon}
            placeholder="Tujuan Pengiriman"
          />
          <View style={Theme.textInputIcon}>
            <Icon name="chevron-down" size={20} />
          </View>
        </View>
        <View style={Theme.textInputContainer}>
          <TextInput
            style={Theme.textInputDoubleIcon}
            placeholder="Berat Barang"
          />
          <View style={Theme.textInputIcon}>
            <Text style={Theme.bold}>Kg</Text>
          </View>
        </View>
        <View style={[Theme.switchContainer, Theme.center]}>
          <Text>Apakah barang memiliki dimensi ?</Text>
          <Switch
            onValueChange={enableDimension}
            value={isEnabled}
            style={Theme.marginLeft10}
          />
        </View>
        <View style={[Theme.fullWidth, Theme.center]}>
          {isEnabled ? (
            <View style={Theme.row}>
              <View style={Theme.textInputContainerSmall}>
                <TextInput
                  style={Theme.textInputDoubleIcon}
                  placeholder="Panjang"
                />
                <View style={Theme.textInputIconSmall}>
                  <Text style={Theme.bold}>cm</Text>
                </View>
              </View>
              <View style={Theme.textInputContainerSmall}>
                <TextInput
                  style={Theme.textInputDoubleIcon}
                  placeholder="Lebar"
                />
                <View style={Theme.textInputIconSmall}>
                  <Text style={Theme.bold}>cm</Text>
                </View>
              </View>
              <View style={Theme.textInputContainerSmall}>
                <TextInput
                  style={Theme.textInputDoubleIcon}
                  placeholder="Tinggi"
                />
                <View style={Theme.textInputIconSmall}>
                  <Text style={Theme.bold}>cm</Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>

        <View style={[Theme.switchContainer, Theme.center]}>
          <Text>Asuransi ?</Text>
          <Switch
            onValueChange={enableInsurance}
            value={hasInsurance}
            style={Theme.marginLeft10}
          />
        </View>
        <View>
          {hasInsurance ? (
            <View style={Theme.textInputContainer}>
              <View style={Theme.textInputIcon}>
                <Text style={Theme.bold}>Rp</Text>
              </View>
              <TextInput
                style={Theme.textInputDoubleIcon}
                placeholder="Harga Barang"
              />
            </View>
          ) : null}
        </View>

        <View>
          <TouchableOpacity style={[Theme.defaultButton, Theme.marginTop40s]}>
            <Text style={Theme.defaultTextButton}>Hitung</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Theme.pageFooter} />
    </View>
  );
};

export default PriceCheck;
