import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      {children}
    </SafeAreaView>
  );
};

export default Page;
