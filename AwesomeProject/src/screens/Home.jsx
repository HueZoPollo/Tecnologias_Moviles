import { View, StyleSheet } from 'react-native';
import Header from '../components/Searching/Header';
import Body from '../components/Searching/Body';
import Footer from '../components/Searching/Footer';

export default function Home() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      padding: 30,
    },
});
