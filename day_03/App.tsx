import React,{ useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
 
  const [fruit, setFruit] = useState('Apple,Orange,Banana,Grape,Tomato');
  
  const names = ['Apple', 'Orange', 'Banana', 'Grape', 'Tomato']
  
  const convertTextToUpperCase = () => {
    let upperCaseText = fruit.toUpperCase();
    setFruit(upperCaseText);
  };

    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text>{names}</Text>
          </View>

          <View style={styles.content}>
            <Button
              
              title="CHANGE TO UPPERCASE"
              onPress={convertTextToUpperCase}
            />
            <Text style={styles.textStyle}> {fruit} </Text>
          </View>

          <View style={styles.content}>
            <TextInput
              onChangeText={(text) => setFruit(text)}
              style={styles.input}
            />
             <Button
              title="FILTERING ARRAY"
            />
          </View>
          <View>
            {names.filter(name => name.includes('O')).map(filteredName => (
           <Text>
           {filteredName}
          </Text>
       ))}

     
    </View>
        </View>
        </View>
    );
  };
  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ddd',
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
    borderColor: "#fff",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,

    backgroundColor: '#fff'
  },
  textStyle : {
    fontSize: 15,
  }
});
  

