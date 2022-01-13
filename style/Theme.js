import {PixelRatio, StyleSheet} from 'react-native';

const Theme = StyleSheet.create({
  displayFlex: {
    flex: 1,
  },
  paddingRight10: {
    paddingRight: 10,
  },
  center: {
    alignItems: 'center',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  alignLeft: {
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  midle: {
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  marginLeft10: {
    marginLeft: 10,
  },
  marginRight10: {
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  subTitle2: {
    fontSize: 16,
    marginBottom: 3,
  },
  smallNote: {
    fontSize: 12,
  },
  bannerCard: {
    height: 150,
    backgroundColor: '#dfdfdf',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  nearestAgentCardHolder: {
    flexDirection: 'row',
    width: 270,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    borderColor: '#dfdfdf',
    borderWidth: 1,
  },
  nearestAgentCardIcon: {
    width: 60,
    height: 70,
  },
  nearestAgentCardContent: {
    width: 210,
    height: 70,
  },
  bigMenuButton: {
    backgroundColor: '#ffbb00',
    height: 90,
    width: 100,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  cellMenuHolder: {
    backgroundColor: 'transparent',
    opacity: 1,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 1,
  },
  cellMenuLeftIcon: {
    flex: 2,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    opacity: 1,
    height: 50,
    paddingLeft: 10,
  },
  cellMenuRightIcon: {
    flex: 2,
    backgroundColor: 'transparent',
    opacity: 1,
    height: 50,
  },
  cellMenuContent: {
    flex: 10,
    backgroundColor: 'transparent',
    opacity: 1,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cellMenuHolderBig: {
    backgroundColor: 'transparent',
    opacity: 1,
    flexDirection: 'row',
    height: 70,
    width: '100%',
    marginBottom: 10,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 1,
  },
  cellMenuLeftIconBig: {
    flex: 2,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    opacity: 1,
    height: 70,
    paddingLeft: 10,
  },
  cellMenuRightIconBig: {
    flex: 2,
    backgroundColor: 'transparent',
    opacity: 1,
    height: 70,
  },
  cellMenuContentBig: {
    flex: 10,
    backgroundColor: 'transparent',
    opacity: 1,
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainLogo: {
    width: PixelRatio.getPixelSizeForLayoutSize(101),
    height: PixelRatio.getPixelSizeForLayoutSize(33),
  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(46),
    height: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  loginPageHeader: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginPageBody: {
    flex: 7,
    justifyContent: 'center',
  },
  loginPageFooter: {
    flex: 1,
    justifyContent: 'center',
  },
  loginPageBgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpPageHeader: {
    flex: 6,
  },
  signUpPageBody: {
    flex: 8,
  },
  signUpPageFooter: {
    flex: 1,
  },
  pageHeader: {
    flex: 3,
  },
  pageBody: {
    flex: 11,
  },
  safeWidth: {
    width: '80%',
  },
  pageFooter: {
    flex: 1,
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    width: '80%',
    margin: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
  },
  textInput: {
    height: 40,
    flex: 7,
  },
  textInputDoubleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
  },
  textInputIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  navigationBar: {
    height: 58,
    width: '80%',
  },
  navigationBarLeft: {
    flex: 6,
    height: 58,
  },
  navigationBarRight: {
    flex: 4,
    height: 58,
  },
  subNavigationBar: {
    height: 42,
    width: '80%',
  },
  barColor: {
    backgroundColor: '#282828',
  },
  searchBar: {
    height: 40,
    elevation: 0,
    borderRadius: 10,
  },
  searchBarText: {
    fontSize: 14,
  },
  defaultButton: {
    backgroundColor: '#ffbb00',
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height: PixelRatio.getPixelSizeForLayoutSize(18),
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextButton: {
    alignItems: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  defaultButtonDisable: {
    backgroundColor: '#cfcfcf',
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height: PixelRatio.getPixelSizeForLayoutSize(18),
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextButtonDisable: {
    alignItems: 'center',
    color: '#afafaf',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hyperlink: {
    color: 'skyblue',
  },
  textWhite: {
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  marginTop40: {
    marginTop: 40,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop10: {
    marginTop: 10,
  },
});

export default Theme;
