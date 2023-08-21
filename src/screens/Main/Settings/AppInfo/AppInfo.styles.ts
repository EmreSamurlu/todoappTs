import {spacing} from '../../../../styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page_container: {
    height: '100%',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  field_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.sm,
  },
  label: {
    fontSize: 16,
  },
  field: {
    fontSize: 16,
  },
});
