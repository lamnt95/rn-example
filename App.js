import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Detail from './screens/Detail';
import ROUTE from './constant/route';

const {Navigator, Screen} = createStackNavigator();

function App() {
  return (
    <Navigator initialRouteName={ROUTE.HOME}>
      <Screen
        name={ROUTE.HOME}
        component={Home}
        options={{title: 'Overview'}}
        initialParams={{itemName: 'Home Product'}}
      />
      <Screen name={ROUTE.DETAIL} component={Detail} />
    </Navigator>
  );
}

export default App;
