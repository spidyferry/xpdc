import {PixelRatio, StyleSheet} from 'react-native';

const Theme = StyleSheet.create({
  loginPage: {
    flex: 1,
  },
  loginPageLogo: {
    width: PixelRatio.getPixelSizeForLayoutSize(101),
    height: PixelRatio.getPixelSizeForLayoutSize(33),
  },
  loginPageForm: {
    alignItems: 'center',
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
  hyperlink: {
    color: 'skyblue',
  },
  textWhite: {
    color: 'white',
  },
});

export default Theme;
