import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState("100000");
  const [usd, setUSD] = useState('');
  const [baht, setbaht] = useState('');
  const [yuan, setyuan ] = useState('') ;

  const clickMe = () => {
    setUSD ( "USD  = " + number * 0.00048);
    setbaht( "baht = " + number * 0.017);
    setyuan( "Yuan = " + number * 0.0033);
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
      <Text style={styles.title}>MMK</Text>
      <TextInput onChangeText={(num) => setNumber(num)} style={styles.input} keyboardType="numeric" />
      <Button style={styles.button} title='Convert' onPress={clickMe}/>
      <View style={styles.content}>
        <Text style={styles.title}> {usd} </Text>
        <Text style={styles.title}> {baht} </Text>
        <Text style={styles.title}> {yuan} </Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    marginTop: 70,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  content: {
    marginTop: 40,
 
  },
  button: {
    marginBottom: 40,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  title: {
    fontSize: 19,
  }
});

