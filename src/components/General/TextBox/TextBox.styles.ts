import {StyleSheet, ViewStyle} from 'react-native';
import {spacing} from '../../../styles';

type Style = {
  container: ViewStyle;
  label: ViewStyle;
  text_container: ViewStyle;
  value: ViewStyle;
};

export default StyleSheet.create<Style>({
  container: {
    height: spacing.xxl,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
  },
  text_container: {
    width: '90%',
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 16,
  },
});
