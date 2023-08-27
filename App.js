import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StyledText } from './src/components/StyledText';
import { StyledTouchable } from './src/components/StyledTouchable';

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText text='Tarea 3' fontSize={35} fontWeight={'bold'} fontFamily={'serif'} color={'blue'} backgroundColor={'#dfd'} borderRadius={10} margin={100} width={200} textAlign={'center'}/>
      <StyledText text='Este es un texto estilizado!' fontSize={25} fontWeight={'bold'} fontFamily={'notoserif'} color={'blue'} backgroundColor={'#abc'} borderRadius={10}/>
      <StyledTouchable backgroundColor={'#ddf'} padding={5} margin={15} borderRadius={20} borderColor={'#bbb'} borderWidth={2}/>
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
  },
});
