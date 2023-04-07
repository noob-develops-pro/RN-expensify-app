import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AddTrip'>
        <Stack.Screen name="AddTrip" component={AddTripScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

    //  <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="AddTrip" component={AddTripScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
