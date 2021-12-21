import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import NavigationStack from './Application/navigation/RootNavigator';


const fonts = () => Font.loadAsync({
  'roboto-reg': require('./Application/assets/fonts/Roboto/Roboto-Regular.ttf'),
  'roboto-bold': require('./Application/assets/fonts/Roboto/Roboto-Bold.ttf'),
  'PTSans-reg': require('./Application/assets/fonts/PT_Sans/PTSans-Regular.ttf'),
  'PTSans-bold': require('./Application/assets/fonts/PT_Sans/PTSans-Bold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font){
    return (
      <NavigationStack>
      </NavigationStack>
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
