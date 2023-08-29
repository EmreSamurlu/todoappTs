import {spacing} from '../../../../styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page_container: {
    paddingHorizontal: spacing.lg,
  },
  profile_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  label: {
    fontSize: 16,
  },
});
