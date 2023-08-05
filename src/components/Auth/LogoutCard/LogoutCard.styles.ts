import {radius, spacing} from '../../../styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: spacing.xxl * 4,
    height: spacing.xxl * 3,
    padding: spacing.md,
    borderRadius: radius.sm,
    justifyContent: 'space-between',
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
  logout_message: {
    fontWeight: '400',
  },
});
