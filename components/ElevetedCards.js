import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevetedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textBlue}>you</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textBlue}>can</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textBlue}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textBlue}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textBlue}>👍</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', padding: 12},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  textBlue: {
    color: '#EF5384',
    fontSize: 18,
  },
  card: {
    width: 100,
    height: 100,
    margin: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAD5E2',
    borderRadius: 8,
  },

  cardElevated: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowColor: '#f3f3f3',
    shadowRadius: 2,
  },
});
