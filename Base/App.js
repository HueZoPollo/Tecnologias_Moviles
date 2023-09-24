import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Characters from "./src/screens/Characters";

export default function App() {
  return (
    <View style={styles.container}>
      <Characters />
      <StatusBar style="auto" backgroundColor="#272b33" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272b33",
    marginTop: Constants.statusBarHeight,
  },
});
