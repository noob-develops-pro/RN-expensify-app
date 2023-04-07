import {View, Text, TouchableOpacity, Image,FlatList} from 'react-native';
import React from 'react';
import ScreenWraper from '../components/ScreenWraper';
import {colors} from '../theme';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';




const items = [
    {
      id: 3, 
      title: 'Wathced a movie', 
      category: 'entertainment',
     amount:'$100'
    },
 
    {
      id: 2, 
      title: 'bought a jacket', 
      category: 'shopping',
      amount:'$50'
    },
     {
      id: 1, 
      title: 'ate Sadnwitch', 
      category: 'food',
      amount:'$6'
    },
 
 
 
  ]



export default function TripExpensesScreen(props) {
  const {id,place,country} = props.route.params
  console.log(props.route.params)
  const navigation = useNavigation()

 const handlePress = () => { 
  return(
    navigation.navigate('AddTrip')
  )
  }
  return (
    <ScreenWraper className="flex-1">
    <View className='mx-4'>
        <View className='relative '>
          <View className='absolute top-2 left-0 '>
            <BackButton/>
          </View>
            <View>
              <Text className={`${colors.heading} text-xl font-bold text-center `}>{place}</Text> 
              <Text className={`${colors.heading} text-xs font-bold text-center `}>{country}</Text> 
            </View>
            </View>
       <View className='justify-center items-center my-3 mt-5'>
          <Image source={require('../assests/images/7.png')} className='h-72 w-72 '/>
        </View>  
      
    </View>


      {/* recent trips */}
      <View className="px-4 space-y-4">
        <View className=" flex-row justify-between items-center">
          <Text className={` ${colors.heading} font-bold text-xl`}>
           Expenses
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('AddExpenseScreen')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={`${colors.heading} font-bold`}>Add Expense</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList 
          data={items}
          renderItem={({item})=><ExpenseCard item = {item}/>}
          />
        </View>
        
      </View>
    </ScreenWraper>
  );
}
