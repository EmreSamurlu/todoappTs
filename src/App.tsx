import React from 'react';

import FlashMessage from 'react-native-flash-message';

import Initial from './container/Initial';
// import {API_KEY} from '@env';
import Router from './navigation/Router';
import ReduxProvider from './redux/ReduxProvider';

const App: React.FC = () => {
  // console.log(API_KEY);

  return (
    <ReduxProvider>
      <Initial>
        <Router />
        <FlashMessage position="top" />
      </Initial>
    </ReduxProvider>
  );
};

export default App;
