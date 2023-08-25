import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { StyledText } from './src/components/StyledText';

// unidad1/practica1

// console.log('Hola mundo');

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.texto}>Abre la terminal c:!</Text> */}
      <StyledText text='Custom Styled Text' fontSize={40} fontWeight={'bold'} />
      <StyledText text='Custom Styled Text 2' fontSize={20} color={'blue'} />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Hola mundo')}>
        <StyledText text='Boton' fontSize={20} color={'red'} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  texto: {
    color: '#aff',
    fontSize: 30,
    fontWeight: 'normal',
  },
  button: {
    borderWidth: 3,
    padding: 5,
  }
  
});
