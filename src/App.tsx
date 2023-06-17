import React from 'react';
import {API_KEY} from '@env';

import Router from './navigation/Router';

import ReduxProvider from './redux/ReduxProvider';

const App: React.FC = () => {
  console.log(API_KEY);

  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
};

export default App;
