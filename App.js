import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import LogScreen from './screens/LogScreen'
import PastLogScreen from './screens/PastLogScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
        <Stack.Screen name="PastLog" component={PastLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;