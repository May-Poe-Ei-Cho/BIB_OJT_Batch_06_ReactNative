import React  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }: {navigation: any}): JSX.Element{
  return (
    <View style={styles.content}>
      <Text>Home</Text>
      <Button
        title="Go To Profile"
        onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen({ navigation }: {navigation: any}): JSX.Element{
  return (
    <View style={styles.content}>
      <Text>Profile</Text>
      <Button
        title="Go To Setting"
        onPress={() => navigation.navigate('Setting')} />
      <Button
        title="Go Back Home"
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingScreen({ navigation }: {navigation: any}): JSX.Element{
  return (
    <View style={styles.content}>
      <Text>Setting</Text>
      <Button
        title="Go Back Profile"
        onPress={() => navigation.goBack()} />
      <Button
        title="Go Back Home"
        onPress={() => navigation.popToTop()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
