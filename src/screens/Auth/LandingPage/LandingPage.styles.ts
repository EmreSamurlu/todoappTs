import {spacing} from '../../../styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page_container: {
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: spacing.lg,
  },
  logo: {
    width: '60%',
    height: '10%',
    alignSelf: 'center',
    position: 'absolute',
    top: '10%',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  container: {
    justifyContent: 'space-between',
    height: spacing.xxl * 1.5,
  },
});
