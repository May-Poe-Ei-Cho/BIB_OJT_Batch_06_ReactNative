import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView
          horizontal={true}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </ScrollView>
        
        <View style={styles.blk}>
          <View style={styles.box1}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Lorem ipsum</Text>
          </View>
        </View>
        <View style={styles.blk}>
          <View style={styles.box1}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Lorem ipsum</Text>
          </View>
        </View>
        <View style={styles.blk}>
          <View style={styles.box1}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Lorem ipsum</Text>
          </View>
        </View>
        <View style={styles.blk}>
          <View style={styles.box1}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Lorem ipsum</Text>
          </View>
        </View>
        <View style={styles.blk}>
          <View style={styles.box1}></View>
          <View style={styles.content}>
            <Text style={styles.text}>Lorem ipsum</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 30,
    marginHorizontal: 30,
  },
  blk: {
    flexDirection: 'row',
    marginTop: 40,
  },
  box: {
     width: 250,
     height: 200,
     backgroundColor: '#C4C4C4',
     marginRight: 20,
     marginBottom: 10,
  },
  box1: {
     width: 90,
     height: 90,
     backgroundColor: '#C4C4C4',
  },
  content: {
     width: 150,
     height: 100,
     alignItems: 'center',
     justifyContent: 'center',
  },
  text: {
     fontSize: 18,
     fontWeight: 'bold',
     color: '#959595',
  }
});
