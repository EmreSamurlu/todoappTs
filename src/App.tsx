import React from 'react';
import {API_KEY_PROD, API_KEY_DEV} from '@env';

import Router from './navigation/Router';

import ReduxProvider from './redux/ReduxProvider';

const App: React.FC = () => {
  console.log(API_KEY_PROD);
  console.log(API_KEY_DEV);
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
};

export default App;
