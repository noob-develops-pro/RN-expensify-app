import { View,ScrollView, Text ,Image,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import ScreenWraper from '../components/ScreenWraper'
import categories from '../constants/index'
import BackButton from '../components/BackButton'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function AddTripScreen() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const handleAddExpense = () => { 
    if (title && amount && category) {
     navigation.goBack()
    }else{
     console.warn('fill all fields')
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
            <Text className={`${colors.heading} text-xl font-bold text-center `}>Add Expense</Text> 
            </View>
       <View className='justify-center items-center my-3 mt-5'>
          <Image source={require('../assests/images/expenseBanner.png')} className='h-72 w-72 '/>
        </View>  
      <View className='mx-2'>
          <Text className={`${colors.heading} font-bold text-lg mb-1`}> For What ? </Text>
          <TextInput value={title} onChangeText={(newPlace)=>setTitle(newPlace)} placeholder='input'  className={`${colors.heading} text-md p-3 mb-2 bg-white rounded-full `}/> 
          <Text className={`${colors.heading} font-bold text-lg mb-1`}> How Much </Text>
          <TextInput value={amount} onChangeText={(newCountry)=>setAmount(newCountry)} placeholder='write something' className={`${colors.heading} text-md p-3 mb-3 bg-white rounded-full `}/> 
      </View>
      <View>
        <Text className={`${colors.heading}`}>Categories</Text>
      </View>
      <View className='flex-row flex-wrap'>
        {categories.map((cat)=>{
          let bgColor = 'bg-white '
          if (category === cat.value) {
            bgColor = 'bg-green-300'
          }
          return(
            <TouchableOpacity onPress={()=>setCategory(cat.value)} key={cat.value} className={ `${bgColor} mx-1 my-1 p-3 rounded-full `}>
              <Text className={`${colors.heading} text-center`}>{cat.title}</Text>
            </TouchableOpacity>
        )
        })}
      
      </View>
    </View>
        
        {/* btn */}
    <View>
        <TouchableOpacity onPress={()=>handleAddExpense()} style={{backgroundColor:colors.button}} className={`${colors.button} p-2 rounded-full my-3`}>
          <Text className='mx-auto font-bold text-white text-lg'>Add Expense</Text>
        </TouchableOpacity>
    </View>
  </View>
 
    
  </ScreenWraper>
    )
}