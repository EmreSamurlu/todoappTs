import React from 'react';
import {Text as NativeText, type TextProps} from 'react-native';

import {useTranslation} from 'react-i18next';

export interface TxtProps extends TextProps {
  text: string;
  textStyle: object;
}

const Text: React.FC<TxtProps> = ({text, textStyle}) => {
  const {t} = useTranslation();
  return <NativeText style={textStyle}>{t(text)}</NativeText>;
};

export default Text;
