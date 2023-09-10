import {StyleSheet, ViewStyle} from 'react-native';

import {radius, spacing} from '@styles';

type Style = {
  container: ViewStyle;
  text_box: ViewStyle;
  label: ViewStyle;
  plus_icon: ViewStyle;
  icon_box: ViewStyle;
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
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  plus_icon: {
    fontSize: 20,
    fontWeight: '500',
  },
  icon_box: {},
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
    icon_box: {
      marginLeft: spacing.sm,
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
    icon_box: {
      marginLeft: spacing.sm,
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
    icon_box: {},
  }),
};
