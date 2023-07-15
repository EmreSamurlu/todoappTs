import {radius, spacing} from '../../../styles';
import {StyleSheet, ViewStyle} from 'react-native';

type Style = {
  container: ViewStyle;
  text_box: ViewStyle;
  label: ViewStyle;
  plus_icon: ViewStyle;
};

const baseStyles = StyleSheet.create<Style>({
  container: {
    height: spacing.xl,
    borderRadius: radius.xs,
    paddingRight: spacing.sm,
    paddingLeft: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  plus_icon: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default {
  default: StyleSheet.create({
    container: {
      ...baseStyles.container,
      paddingLeft: spacing.sm,
    },
    label: {
      ...baseStyles.label,
    },
    plus_icon: {
      ...baseStyles.plus_icon,
    },
    text_box: {
      ...baseStyles.text_box,
    },
  }),
  outline: StyleSheet.create({
    container: {
      ...baseStyles.container,
      borderWidth: 1,
    },
    label: {
      ...baseStyles.label,
    },
    plus_icon: {
      ...baseStyles.plus_icon,
    },
    text_box: {
      ...baseStyles.text_box,
    },
  }),
  icon: StyleSheet.create({
    container: {
      height: spacing.xxl,
      width: spacing.xxl,
      borderRadius: radius.xxl,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      ...baseStyles.label,
    },
    plus_icon: {
      ...baseStyles.plus_icon,
    },
    text_box: {
      ...baseStyles.text_box,
    },
  }),
};
