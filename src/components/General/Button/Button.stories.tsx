import React from 'react';
import {View} from 'react-native';
import Button, {type ButtonProps} from './Button';
import type {Meta, StoryObj} from '@storybook/react-native';

const ButtonMeta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonProps> = {};

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};
