import React from 'react';
import { Provider } from 'react-redux';
import {
  View
} from 'react-native';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>

      </View>
    </Provider>
  );
};

export default App;
