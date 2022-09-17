import React, { createContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Generator from '../QRShare/screens/Generator/index'
import Scanner from '../QRShare/screens/Scanner/index'

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
          
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
              gesturesEnabled: false
          }}
          
          />  */}
          <Stack.Screen name="Generator" component={Generator}
            options={{
              headerShown: false,
              gesturesEnabled: false
            }} />
          <Stack.Screen name="Scanner" component={Scanner}
            options={{
              headerShown: false,
              gesturesEnabled: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;