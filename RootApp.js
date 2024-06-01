import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Library from './src/screen/Library';

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="library" component={Library} />
    </Stack.Navigator>
  );
}

export default function RootApp() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
