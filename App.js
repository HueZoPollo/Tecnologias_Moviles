import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// unidad1/practica1

// console.log('Hola mundo');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Abre la terminal c:!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000'
  },
  texto: {
    color: '#aff',
    fontSize: 30,
    fontWeight: 'normal',
  }
  
});
