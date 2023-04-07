import { View, Text } from 'react-native'
import React from 'react'
import { categoryBG } from '../theme'


export default function ExpenseCard({item}) {
  const {category} = item

  return (
    <View style={{backgroundColor:categoryBG[category]}} className='flex-row justify-between  mb-3 p-3 py-4 bg-red-300 rounded-xl'>
      <View>
        <Text className = 'text-stone-700 font-bold'>{item.title}</Text>
        <Text className = 'text-stone-700 text-sm'>{item.category}</Text>
      </View>
      <View>
        <Text className = 'text-stone-700 my-2'>{item.amount}</Text>
      </View>
    </View>
  )
}