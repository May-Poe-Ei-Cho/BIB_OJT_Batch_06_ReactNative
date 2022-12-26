import React,{ useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableHighlight,TouchableOpacity,Alert,FlatList, } from 'react-native';

const Item = (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
      <Text style={styles.itemText}>
        {props.name}
        </Text>
        </TouchableOpacity>
    </View>
  )
} 
export default function App() {
  let [items, setItem] = useState('');

  const [name, setName] = useState('Name');

  const add = () => {
    setItem([
      ...items,
      {id : items.length + 1 , name}
    ])
  }
 
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <Text style={styles.title}>Day 06 Assignment</Text>
      </View>

      <View style={styles.content}>
        <TextInput
        style={styles.input}
          onChangeText={text => setName(text)}
      
        />
       <TouchableHighlight style={styles.button} onPress={add}>
        <Text style={styles.buttontext}>ADD</Text>
       </TouchableHighlight>
      </View>

      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => (
          <Item name = {item.name} />
          )}
          keyExtractor={i => i.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  appbar: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 90,
    paddingRight: 20,
    backgroundColor: '#B501AF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    marginTop: 20,
    marginHorizontal: 13,
    flexDirection: 'row'
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    width: '76%',
    marginRight: 15
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#8D0089',
    borderRadius: 6,
  },
  buttontext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    marginLeft: 15,
    marginRight: 15,
  }

});
