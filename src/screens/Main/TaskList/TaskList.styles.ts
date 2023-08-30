import {StyleSheet} from 'react-native';

import {spacing} from '@styles';

export const styles = StyleSheet.create({
  page_container: {
    height: '100%',
    padding: spacing.md,
  },

  //* header container
  header_container: {
    flex: 0.1,
    borderBottomWidth: 1,
    paddingBottom: spacing.md,
  },

  header_top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  header_bottom_container: {
    flexDirection: 'row',
  },
  count_text: {
    fontWeight: '500',
    opacity: 0.7,
  },

  //* body container
  body_container: {
    flex: 0.9,
    paddingTop: spacing.md,
  },
  body_headers: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: spacing.sm,
  },
  incomplete_container: {},
  completed_container: {},

  //* add task button
  add_task_button: {
    position: 'absolute',
    bottom: '3%',
    right: '3%',
  },
});
