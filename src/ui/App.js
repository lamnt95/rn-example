import React from 'react';
import {Provider} from 'react-redux';
import Login from './screens/Login';

import store from '../store';

export default function App() {
  return (
    <Provider store={store()}>
      <Login />
    </Provider>
  );
}
