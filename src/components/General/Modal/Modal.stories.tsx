import React from 'react';
import {View, Text} from 'react-native';
import Modal, {ModalProps} from './Modal';
import type {Meta, StoryObj} from '@storybook/react-native';

const ModalMeta: Meta<ModalProps> = {
  title: 'Modal',
  component: Modal,
  argTypes: {},
  args: {
    children: (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{backgroundColor: 'red', flex: 0.5}}>
        <Text>Hello World</Text>
      </View>
    ),
  },
};

export default ModalMeta;

export const Basic: StoryObj<ModalProps> = {
  args: {},
};
