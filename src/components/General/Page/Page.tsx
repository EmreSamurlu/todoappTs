import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  pageStyle: object;
}

const Page: React.FC<Props> = ({children, pageStyle}) => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View style={pageStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default Page;
