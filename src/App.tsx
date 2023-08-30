import React from 'react';

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
      </Initial>
    </ReduxProvider>
  );
};

export default App;
