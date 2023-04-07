import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <View className='flex h-full justify-around'>
        <View className="items-center my-10">
            <Image source={require('../assests/images/11.png')} className="h-96 w-96 shadow " />
        </View>
      <View className='flex space-y-4'>
        <Text className={`${colors.heading} text-4xl text-center font-bold mb-10`}>Expensify</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')} style={{backgroundColor: colors.button}} className='p-3 rounded-full mx-5 '>
          <Text className='text-center font-bold'>Sing In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')} style={{backgroundColor: colors.button}} className='p-3 rounded-full mx-5 '>
          <Text className='text-center font-bold '>Sing Up</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}