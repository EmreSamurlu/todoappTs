import React from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';

import {useNavigation, useTheme} from '@react-navigation/native';
import FontIcon from '../FontIcon/FontIcon';
import styles from './Page.styles';

interface Props {
  children: React.ReactNode;
  pageStyle: object;
  goBack: boolean;
}

const Page: React.FC<Props> = ({children, pageStyle, goBack}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar hidden />

      <View style={pageStyle}>
        {goBack && (
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.back_button}>
            <FontIcon
              iconName={'chevron-left'}
              iconColor={colors.blue}
              iconSize={24}
            />
          </Pressable>
        )}
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Page;
