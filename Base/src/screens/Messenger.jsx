import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Messenger/Header';
import History from '../components/Messenger/History';

export default function Messenger() {
  return (
    <View>
        <Header/>
        <History/>
    </View>
  );
}
