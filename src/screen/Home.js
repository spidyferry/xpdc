import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Theme from '../../style/Theme';
import HomeHeader from '../component/HomeHeader';
import BannerCard from '../component/BannerCard';
import SquareButton from '../component/SquareButton';
import NearestAgentCard from '../component/NearestAgentCard';

const Home = () => {
  return (
    <View style={Theme.displayFlex}>
      <View style={[Theme.pageHeader, Theme.center]}>
        <HomeHeader userName="Ferry Sugianto" />
      </View>
      <View style={Theme.pageBody}>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // pagingEnabled={true}
            style={Theme.marginTop20}>
            <BannerCard />
            <BannerCard />
            <BannerCard />
            <BannerCard />
            <BannerCard />
          </ScrollView>
        </View>
        <View style={[Theme.marginTop20, Theme.center]}>
          <View style={Theme.safeWidth}>
            <Text style={Theme.bold}>Mitra XPDC Terdekat</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={Theme.marginTop10}>
            <NearestAgentCard
              icon="shield-account"
              title="Agen Sungai Panas"
              detail="9.6 km"
              navigateTo="ChangeName"
            />
            <NearestAgentCard
              icon="shield-account"
              title="Nama"
              detail="Ferry Sugianto"
              navigateTo="ChangeName"
            />
            <NearestAgentCard
              icon="shield-account"
              title="Nama"
              detail="Ferry Sugianto"
              navigateTo="ChangeName"
            />
          </ScrollView>
        </View>
        <View style={[Theme.marginTop20, Theme.center]}>
          <View style={Theme.safeWidth}>
            <Text style={Theme.bold}>Pilih Layanan Kami</Text>
          </View>
        </View>
        <View
          style={[
            Theme.fullWidth,
            Theme.center,
            Theme.row,
            Theme.midle,
            Theme.marginTop10,
          ]}>
          <SquareButton icon="airplane" title="Kargo Udara" />
          <SquareButton icon="ferry" title="Kargo Laut" />
          <SquareButton icon="truck" title="Kargo Darat" />
        </View>
        <View
          style={[
            Theme.fullWidth,
            Theme.center,
            Theme.row,
            Theme.midle,
            Theme.marginTop10,
          ]}>
          <SquareButton icon="warehouse" title="Gudang dan Pengemasan" />
          <SquareButton
            icon="swap-horizontal-bold"
            title="Broker Custom Clearance"
          />
          <SquareButton icon="bag-carry-on" title="Layanan Handcarry" />
        </View>
      </View>
    </View>
  );
};

export default Home;
