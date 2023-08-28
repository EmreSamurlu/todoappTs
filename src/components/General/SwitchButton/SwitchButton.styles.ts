import {spacing} from '../../../styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: spacing.xl + spacing.xs,
  },
  value: {
    marginHorizontal: spacing.sm,
  },
});
