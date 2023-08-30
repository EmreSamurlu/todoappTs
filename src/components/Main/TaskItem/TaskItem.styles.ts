import {StyleSheet} from 'react-native';

import {spacing} from '@styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.xs,
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
