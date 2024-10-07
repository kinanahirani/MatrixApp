import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/baseScreens/HomeScreen';

// Configs
import {theme} from './src/config/theme';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={theme.color.gray} barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};

export default App;
