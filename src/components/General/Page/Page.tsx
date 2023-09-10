import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, StatusBar, View} from 'react-native';

import {useNavigation, useTheme} from '@react-navigation/native';

import FontIcon from '../FontIcon/FontIcon';
import Text from '../Text/Text';
import styles from './Page.styles';

interface Props {
  children: React.ReactNode;
  pageStyle: object;
  goBack: boolean;
  pageTitle: string;
}

const Page: React.FC<Props> = ({children, pageStyle, goBack, pageTitle}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [pageName, setPageName] = useState<string>(pageTitle);

  useEffect(() => {
    if (pageTitle) {
      setPageName(pageTitle);
    }
  }, [pageTitle]);

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
        {pageTitle && (
          <Text
            text={pageName}
            textStyle={[styles.page_title, {color: colors.blue}]}
          />
        )}

        {children}
      </View>
    </SafeAreaView>
  );
};

export default Page;
