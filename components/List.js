import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
const data = [
  {id: 1, name: 'hello'},
  {id: 2, name: 'world'},
];

export default function List() {
  return (
    <View>
      {
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text className = 'text-2xl' title={item.name} key={item.id} />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      }
    </View>
  );
}
