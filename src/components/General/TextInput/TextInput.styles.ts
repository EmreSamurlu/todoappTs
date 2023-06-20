import {StyleSheet, ViewStyle} from 'react-native';
import {spacing} from '../../../styles';

type Style = {
  container: ViewStyle;
};

const base_styles = StyleSheet.create<Style>({
  container: {
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
});

export default {
  default: StyleSheet.create<Style>({
    container: {
      ...base_styles.container,
    },
  }),
  with_label: StyleSheet.create<Style>({
    container: {
      ...base_styles.container,
    },
  }),
  with_label_and_icon: StyleSheet.create<Style>({
    container: {
      ...base_styles.container,
    },
  }),
};
