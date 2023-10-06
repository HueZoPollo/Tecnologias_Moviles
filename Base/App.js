import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Send from "./src/pages/Send";
import Home from "./src/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppContextProvider from "./src/context/AppContext";
import Balance from "./src/pages/Balance";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Send" component={Send} />
            <Stack.Screen name="Balance" component={Balance} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="#0d0d0d" />
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
