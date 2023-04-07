import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {Platform} from 'react-native/Libraries/Utilities/Platform';

export default function ScreenWraper({children}) {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === 'ios'
    ? 70
    : 0; //gives us the height of the notch of a device.
  // let statusBarHeight = StatusBar.currentHeight
  console.log(StatusBar);
  return <View className="pt-4">{children}</View>;
}
