import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';

const { Navigator, Screen: StackScreen } = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <StackScreen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
