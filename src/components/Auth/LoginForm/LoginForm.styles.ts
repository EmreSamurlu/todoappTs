import {StyleSheet} from 'react-native';

import {spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: spacing.md,
  },
  inner_container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 128,
  },
  show_button: {
    textAlign: 'right',
    paddingVertical: spacing.md,
  },
  text_button: {
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: spacing.md,
  },
  button_container: {
    height: spacing.xxl * 1.5,
    justifyContent: 'space-between',
  },
});
