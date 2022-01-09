import {PixelRatio, StyleSheet} from 'react-native';

const Theme = StyleSheet.create({
  displayFlex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  left: {
    textAlign: 'left',
  },
  midle: {
    justifyContent: 'center',
  },
  mainLogo: {
    width: PixelRatio.getPixelSizeForLayoutSize(101),
    height: PixelRatio.getPixelSizeForLayoutSize(33),
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
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    width: '80%',
    margin: 10,
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
    backgroundColor: 'skyblue',
    height: 100,
    width: '100%',
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
});

export default Theme;
