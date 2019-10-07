import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './navigation';
import { store, persistor } from './store';
import theme from './theme';

EStyleSheet.build(theme);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
