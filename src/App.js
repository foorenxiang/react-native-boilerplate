import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';
import { AppContextProvider as ReactContextProvider } from './utils/AppContext';

const App = () => (
  <ReduxProvider store={store}>
    <ReactContextProvider>
      <Routes />
    </ReactContextProvider>
  </ReduxProvider>
);

export default registerRootComponent(App);
