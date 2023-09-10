import {StyleSheet} from 'react-native';

import {spacing} from '../../../styles';

export default StyleSheet.create({
  page_container: {
    height: '100%',
    borderColor: 'red',
    padding: spacing.md,
    paddingTop: spacing.xxl,
  },
  button_top_container: {
    flex: 0.25,
    justifyContent: 'space-between',
  },
  logout_button_container: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  logout_card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
