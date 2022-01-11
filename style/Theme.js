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
  midle: {
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
  },
  smallNote: {
    fontSize: 12,
  },
  cardHolder: {
    backgroundColor: 'transparent',
    opacity: 1,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 1,
  },
  cardLeftIcon: {
    flex: 2,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    opacity: 1,
    height: 50,
    paddingLeft: 10,
  },
  cardRightIcon: {
    flex: 2,
    backgroundColor: 'transparent',
    opacity: 1,
    height: 50,
  },
  cardContent: {
    flex: 10,
    backgroundColor: 'transparent',
    opacity: 1,
    height: 50,
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
    flex: 4,
  },
  pageBody: {
    flex: 10,
  },
  safeWidth: {
    width: '85%',
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
    width: '85%',
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
    width: '85%',
  },
  barColor: {
    backgroundColor: '#282828',
  },
  searchBar: {
    height: 40,
  },
  searchBarText: {
    fontSize: 14,
  },
  defaultButton: {
    backgroundColor: '#ffcc33',
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextButton: {
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  defaultButtonDisable: {
    backgroundColor: '#cfcfcf',
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTextButtonDisable: {
    alignItems: 'center',
    color: '#afafaf',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hyperlink: {
    color: 'skyblue',
  },
  textWhite: {
    color: 'white',
  },
  marginTop40: {
    marginTop: 40,
  },
  marginTop20: {
    marginTop: 20,
  },
});

export default Theme;
