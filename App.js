import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTripScreen from './screens/AddTripScreen';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import TripExpensesScreen from './screens/TripExpensesScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';


const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false,presentation:'modal'}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false,presentation:'modal'}}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AddTripScreen" component={AddTripScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AddExpenseScreen" component={AddExpenseScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TripExpensesScreen" component={TripExpensesScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )}