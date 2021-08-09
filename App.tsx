import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GradientProvider } from './src/context/GradientContext';
/* import { View } from 'react-native'; */
import { Navigation } from './src/Navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App;