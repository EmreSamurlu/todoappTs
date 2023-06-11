import {describe, expect, jest, test} from '@jest/globals';
import React from 'react';
import {render} from '@testing-library/react-native';
import Text from './Text';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        // You can include here any property your component may use
      },
    };
  },
}));

describe('describe', () => {
  test('test', () => {
    const component = render(
      <Text
        text="Hello world"
        textStyle={{
          fontSize: 13,
        }}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
