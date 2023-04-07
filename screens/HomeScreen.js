import {View, Text, TouchableOpacity, Image,FlatList,ScrollView} from 'react-native';
import React from 'react';
import ScreenWraper from '../components/ScreenWraper';
import {colors} from '../theme';
import randomImage from '../assests/images/randomImage';
import EmptyList from '../components/EmptyList';
import { useNavigation } from '@react-navigation/native';



const items = [
    {
      id: 1, 
      place: 'Gujrat', 
      country: 'Pakistan'
    },
    {
      id: 2, 
      place: 'London Eye',
      country: 'England',
    },
    {
      id: 3, 
      place: 'Washington dc',
      country: 'America',
    },
    {
      id: 4, 
      place: 'New york',
      country: 'America'
    },
   
  ]



export default function HomeScreen() {
  const navigation = useNavigation()

 const handlePress = () => { 
  return(
    navigation.navigate('AddTrip')
  )
  }
  return (
    <ScreenWraper className="flex-1">
      <View className="flex-row justify-between items-center px-4 pb-4">
        <Text 
          className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('WelcomeScreen')} className="p-2 px-3 bg-white  border border-gray-200 rounded-full">
          <Text className={`${colors.heading} font-bold`}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assests/images/banner.png')}
          className="w-60 h-60 "></Image>
      </View>

      {/* recent trips */}
      <View className="px-4 space-y-4" style={{height:500}}>
        <View className=" flex-row justify-between items-center">
          <Text className={` ${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('AddTripScreen')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={`${colors.heading} font-bold`}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:430}}>
          <FlatList
          data={items}
          ListEmptyComponent={<EmptyList message={"you've not added any Trip"}/>}
          numColumns={2}
          keyExtractor={items.id}
          columnWrapperStyle={{
            justifyContent:'space-between'
          }}
          className='mx-1'
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('TripExpensesScreen',{...item})} className='bg-white p-3 rounded-2xl shadow-sm mb-3'>
                <View>
                  <Image source={randomImage()} className='w-32 h-32 mb-2'/>
                  <Text className= 'text-black font-bold text-lg'>{item.place}</Text>
                  <Text className= {`text-black text-sm`}>{item.country}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
          />
        </View>
        
      </View>
    </ScreenWraper>
  );
}
