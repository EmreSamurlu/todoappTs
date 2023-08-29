import {spacing} from '../../../styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing.xl + spacing.xs,
    minWidth: 150,
  },

  value: {
    marginHorizontal: spacing.sm,
  },
});
