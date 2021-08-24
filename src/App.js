import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default registerRootComponent(App);
