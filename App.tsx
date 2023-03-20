// https://www.npmjs.com/package/react-native-progress
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/views/Home';
import Forecast from './src/views/Forecast';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Forecast') {
              iconName = focused ? 'ios-stats-chart' : 'ios-stats-chart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Forecast" component={Forecast} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
