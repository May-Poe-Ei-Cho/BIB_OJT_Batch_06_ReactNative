import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: '#F97ACA"', alignSelf: 'stretch', width: 'auto' }]}></View>
      <View style={[styles.blk, {flexDirection: 'row'}]}>
        <View style={[styles.box, { backgroundColor: '#EE5981',width: 165}]}></View>
        <View style={[styles.box, { backgroundColor: '#F75DFC',width: 165}]}></View>
      </View>

      <View style={[styles.blk, {flexDirection: 'row'}]}>
        <View style={[styles.content, {flexDirection: 'column'}]}>
          <View style={[styles.box, { backgroundColor: '#BD5DFC',width: 230}]}></View>
          <View style={[styles.blk, {flexDirection: 'row'}]}>
            <View style={[styles.box, { backgroundColor: '#5DFC9D'}]}></View>
            <View style={[styles.box, { backgroundColor: '#C8BABA' }]}></View>
          </View>
          <View style={[styles.box, { backgroundColor: '#CDFC5D', width: 230 }]}></View>
        </View>
        <View style={[styles.box, { backgroundColor: '#56D6FE',height: 400}]}></View>       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  box: {
    width: 100,
    height: 110,
  },
  content: {
    justifyContent: 'space-between',
  },
  blk: {
    justifyContent: 'space-between',
  }
});
