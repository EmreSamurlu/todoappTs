import {spacing} from '../../../styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  task_label: {
    marginLeft: spacing.sm,
  },
  task_category: {
    marginLeft: spacing.lg + spacing.sm,
  },
});
