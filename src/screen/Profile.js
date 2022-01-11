import React from 'react';
import {View} from 'react-native';
import Theme from '../../style/Theme';
import CellMenu from '../component/CellMenu';
import ProfileHeader from '../component/ProfileHeader';

const Profile = ({navigation}) => {
  return (
    <View style={Theme.displayFlex}>
      <View
        style={[
          Theme.pageHeader,
          Theme.center,
          Theme.midle,
          Theme.marginTop40,
        ]}>
        <ProfileHeader name="Ferry Sugianto" email="1988ferry@gmail.com" />
      </View>
      <View style={[Theme.pageBody, Theme.center, Theme.marginTop40]}>
        <CellMenu icon="account" title="Akun" navigateTo="ProfileSetting" />
        <CellMenu icon="map-marker" title="Alamat" />
        <CellMenu
          icon="email-send"
          title="Syarat dan Ketentuan Pengiriman"
          navigateTo="TermCondition"
        />
        <CellMenu
          icon="shield-account"
          title="Kebijakan Privasi"
          navigateTo="Privacy"
        />
        <CellMenu
          icon="clipboard-text"
          title="Kebijakan Cookie"
          navigateTo="Cookies"
        />
        <CellMenu icon="logout" title="Keluar" navigateTo="Login" />
      </View>
      <View style={[Theme.pageFooter, Theme.center]} />
    </View>
  );
};

export default Profile;
