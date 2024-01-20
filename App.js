import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const storeData = async () => {
    const obj = {
      "name" : "My name",
      id: 123,
    }
    try {
      const jsonValue = JSON.stringify(obj);
      await AsyncStorage.setItem('my-key', jsonValue);
      console.log('Set data is done')
    } catch (e) {
      console.log(`Set Error: ${e}`);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      return jsonValue != null ? console.log(JSON.parse(jsonValue)) : console.log(null);
    } catch (e) {
      console.log(`Get Error: ${e}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Set Data to Store" onPress={() => storeData()} />
      <Button title="Get Data from store" onPress={() => getData()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
