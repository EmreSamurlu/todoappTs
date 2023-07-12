import {StyleSheet, ViewStyle} from 'react-native';
import {spacing} from '../../../styles';

type Style = {
  container: ViewStyle;
  label?: ViewStyle;
  icon?: ViewStyle;
  input: ViewStyle;
  text_container: ViewStyle;
};

const base_styles = StyleSheet.create<Style>({
  container: {
    height: spacing.xxl,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
  },
  input: {
    fontSize: 14,
    paddingVertical: spacing.xs,
  },
  text_container: {
    width: '90%',
  },
});

export default {
  default: StyleSheet.create<Style>({
    container: {
      ...base_styles.container,
    },
    text_container: {
      ...base_styles.text_container,
    },
    input: {...base_styles.input},
  }),
  with_label: StyleSheet.create<Style>({
    container: {
      ...base_styles.container,
    },
    text_container: {
      ...base_styles.text_container,
    },
    input: {...base_styles.input},
    label: {
      fontSize: 12,
    },
    icon: {
      padding: spacing.xs,
    },
  }),
};
