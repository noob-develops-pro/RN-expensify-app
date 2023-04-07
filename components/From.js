import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  password: '',
  submit: false,
}

export default function From() {
  const [state, setState] = useState(initialState)
  const { name, email, password } = state
  const clearInputs = () => setState(initialState)

  const handleSubmit = () => {
    setState({ ...state, submit: true })
    setTimeout(() => {
      setState({ ...state, submit: false })
      clearInputs()
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.form_group}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={(txt) => setState({ ...state, name: txt })}
          placeholder='User Name'
          style={styles.input_field}
        />
      </View>
      <View style={styles.form_group}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          onChangeText={(txt) => setState({ ...state, email: txt })}
          value={email}
          placeholder='email'
          style={styles.input_field}
        />
      </View>
      <View style={styles.form_group}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={(txt) => setState({ ...state, password: txt })}
          secureTextEntry={true}
          placeholder='password'
          style={styles.input_field}
        />
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
          <Text style={styles.btn_txt}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => clearInputs()}>
          <Text style={styles.btn_txt}>clear Inputs</Text>
        </TouchableOpacity>
      </View>
      <View>
        {state.submit && (
          <View className='bg-red-200'>
            <Text className='bg-red-500'>User Name: {name}</Text>
            <Text>password: {password}</Text>
            <Text>email: {email}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
  },

  form_group: {
    width: 300,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginRight: 4,
  },
  input_field: {
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
    width: '70%',
  },
  btn: {
    width: 20,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#EF9359',
    flex: 1,
    alignContent: 'center',
  },
  btn_container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    gap: 8,
  },
  btn_txt: {
    color: 'black',
    fontSize: 18,
  },
})
