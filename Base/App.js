import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./src/screens/Home";
// import Login from "./src/screens/Login";
// import { StyledText } from "./src/components/StyledText";
import Card from "./src/components/Card";
import AppContextProvider from "./src/components/Context/AppContext";

const Stack = createStackNavigator();

const person = {
  id: 1,
  name: "Pablo",
  lastname: "Juarez",
  age: 22,
  location: "Morelia",
  country: "Mexico",
};

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <Card />
        <StatusBar style="auto" />
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
