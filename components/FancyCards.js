import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native'
import React from 'react'
import img from '../images/dp.jpg'

export default function FancyCards() {
  return (
    <SafeAreaView>
      <View style={styles.imgCard}>
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 4,
            fontWeight: 'bold',
            color: '#c9c9c9',
          }}
        >
          Trending places
        </Text>
        <Image source={img} style={styles.img} />
        <View>
          <Text
            style={{
              fontSize: 22,
              paddingLeft: 4,
              fontWeight: 'bold',
              color: '#000000',
            }}
          >
            Hawa Mahal
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingLeft: 8,
              paddingTop: 4,
              color: '#000000',
            }}
          >
            Sub Heading
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 12,
              paddingLeft: 12,
              paddingVertical: 8,
              color: '#342B2E',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            minima molestias expedita quidem similique illum qui vel natus ab
            eos deleniti cupiditate facere
          </Text>
          <Text
            style={{
              fontSize: 10,
              paddingLeft: 8,
              color: '#000000',
            }}
          >
            12 miles Away
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 12,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 4,
                backgroundColor: '#EF9359',
                flex: 1,
                alignContent: 'center',
              }}
            >
              <Text style={{ color: 'black', fontSize: 18 }}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://wwww.w3shool.com')}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 4,
                backgroundColor: '#EF9359',
              }}
            >
              <Text style={{ color: 'black', fontSize: 18 }}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imgCard: {
    marginHorizontal: 10,
    marginVertical: 10,

    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  img: {
    marginVertical: 10,
    width: '100%',
    height: 150,
    objectFit: 'cover',
  },
})
