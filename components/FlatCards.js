import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 4,
  },
  container: {flex: 1, flexDirection: 'row', padding: 8},
  card: {
    width: 100,
    height: 100,
    margin: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: '#EF5354',
  },
  blue: {
    backgroundColor: 'blue',
    borderRadius: 45,
  },
  green: {
    backgroundColor: 'green',
    borderRadius: 8,
  },
});
