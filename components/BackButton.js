import { TouchableOpacity, View} from 'react-native'
import React from 'react'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'


export default function BackButton() {
  const handlePress = () => navigation.navigate('Home')
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} className='mx-auto my-auto bg-white rounded-full w-8 h-8 ' >
      <ChevronLeftIcon size={30}  color={colors.button}  />
    </TouchableOpacity>
      
  )
}