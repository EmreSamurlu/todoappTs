import React from 'react';

import Router from './navigation/Router';

import ReduxProvider from './redux/ReduxProvider';

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
};

export default App;
