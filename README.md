# Local Storage
> First, you need to install the `@react-native-async-storage/async-storage` library:
```bash
    npx expo install @react-native-async-storage/async-storage
```
> Import the library to your project
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
```

### Create object data

```javascript
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
```

### Create string data
```javascript
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    console.log(`Set Error: ${e}`);
  }
};
```

### Get object data
```javascript
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      return jsonValue != null ? console.log(JSON.parse(jsonValue)) : console.log(null);
    } catch (e) {
      console.log(`Get Error: ${e}`);
    }
  };
```

### Get string data
```javascript
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log(`Get Error: ${e}`);
  }
};
```

# Full code
```javascript
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

```