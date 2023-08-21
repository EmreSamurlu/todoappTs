import {StyleSheet} from 'react-native';
import {radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.sm,
    flexDirection: 'row',
  },
  value: {
    marginRight: spacing.sm,
  },
});
