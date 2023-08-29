import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import Login from './src/screens/Login';

export default function App() {

  // const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#fff'
  },
  
});
