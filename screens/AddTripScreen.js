import { View, Text ,Image,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import ScreenWraper from '../components/ScreenWraper'
import BackButton from '../components/BackButton'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function AddTripScreen() {
  const [place, setPlace] = useState('')
  const [country, setCountry] = useState('')
  const navigation = useNavigation()

  const handleAddTrip = () => { 
    if (place && country) {
     navigation.navigate('HomeScreen')
    }else{
     console.warn('fill both fields')
    }


   }
  return (
  <ScreenWraper>
    <View className ='flex justify-between h-full mx-4'>
      <View>
        <View className='relative '>
            <View className='absolute top-0 left-0 '>
            <BackButton/>
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center `}>Add Trip</Text> 
            </View>
       <View className='justify-center items-center my-3 mt-5'>
          <Image source={require('../assests/images/4.png')} className='h-72 w-72 '/>
        </View>  
      <View className='space-y-2 mx-2'>
          <Text className={`${colors.heading} font-bold text-lg`}> Where On Earth ? </Text>
          <TextInput value={place} onChangeText={(newPlace)=>setPlace(newPlace)} placeholder='input'  className={`${colors.heading} text-md p-3 mb-3 bg-white rounded-full `}/> 
          <Text className={`${colors.heading} font-bold text-lg`}> Which Country </Text>
          <TextInput value={country} onChangeText={(newCountry)=>setCountry(newCountry)} placeholder='write something' className={`${colors.heading} text-md p-3 mb-3 bg-white rounded-full `}/> 
      </View>
    </View>
        
        {/* btn */}
    <View>
        <TouchableOpacity onPress={()=>handleAddTrip()} style={{backgroundColor:colors.button}} className={`${colors.button} p-2 rounded-full my-3`}>
          <Text className='mx-auto font-bold text-white text-lg'>Add Trip</Text>
        </TouchableOpacity>
    </View>
  </View>
 
    
  </ScreenWraper>
    )
}