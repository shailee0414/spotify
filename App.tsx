/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import RootApp from './RootApp';
import {palette} from './src/constants/theme/palette';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? palette?.c000000 : palette.c000000,
    padding: 20,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <RootApp />
    </SafeAreaView>
  );
}

export default App;
