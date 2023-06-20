import React from 'react';
import {View} from 'react-native';

import {Page, Text, TextInput} from '../../../components';
import styles from './LandingPage.styles';

interface Props {
  txt: string;
}

const LandingPage: React.FC<Props> = () => {
  const handleChange = txt => {
    console.log(txt);
  };
  return (
    <Page>
      <View>
        <Text text={'Welcome'} textStyle={styles.welcome} />
        <TextInput
          onChangeText={text => handleChange(text)}
          placeholder="Label"
          type={'default'}
        />
      </View>
    </Page>
  );
};

export default LandingPage;
