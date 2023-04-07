import { View, Text,Image } from 'react-native'
import React from 'react'

export default function EmptyList({message}) {
  return (
    <View className = 'items-center justify-center space-y-3 my-5 '>
      <Image source={require('../assests/images/empty.png')} className = 'h-36 w-36 shadow-sm'/>
      <Text className='font-bold text-gray-300'>{message || 'data not found'}</Text>
    </View>
  )
}