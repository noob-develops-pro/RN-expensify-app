import { View, Text ,Image,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import ScreenWraper from '../components/ScreenWraper'
import BackButton from '../components/BackButton'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handleSingIn = () => { 
    if (email && password) {
     navigation.navigate('HomeScreen')
    }else{
     console.warn('please sign in first')
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
            <Text className={`${colors.heading} text-xl font-bold text-center `}>Sign In</Text> 
            </View>
       <View className='justify-center items-center my-3 mt-5'>
          <Image source={require('../assests/images/login.png')} className='h-72 w-72 '/>
        </View>  
      <View className='space-y-2 mx-2'>
          <Text className={`${colors.heading} font-bold text-lg`}> Email </Text>
          <TextInput value={email} onChangeText={(email)=>setEmail(email)} placeholder='input'  className={`${colors.heading} text-md p-3 mb-3 bg-white rounded-full `}/> 
          <Text className={`${colors.heading} font-bold text-lg`}> Password </Text>
          <TextInput value={password} secureTextEntry={true} onChangeText={(pass)=>setPassword(pass)} placeholder='write something' className={`${colors.heading} text-md p-3 mb-3 bg-white rounded-full `}/> 
          <TouchableOpacity className='flex-row justify-end'>
            <Text className={`${colors.heading} font-bold `}>Forgot Password</Text>
          </TouchableOpacity>
      </View>
    </View>
        
        {/* btn */}
    <View>
        <TouchableOpacity onPress={()=>handleSingIn()} style={{backgroundColor:colors.button}} className={`${colors.button} p-2 rounded-full my-3`}>
          <Text className='mx-auto font-bold text-white text-lg'>Sign In</Text>
        </TouchableOpacity>
    </View>
  </View>
 
    
  </ScreenWraper>
    )
}