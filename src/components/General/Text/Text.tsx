import React from 'react';
import {Text as NativeText} from 'react-native';

import {useTranslation} from 'react-i18next';

interface Props {
  text: string;
  textStyle: object;
}

const Text: React.FC<Props> = ({text, textStyle}) => {
  const {t} = useTranslation();
  return <NativeText style={textStyle}>{t(text)}</NativeText>;
};

export default Text;
