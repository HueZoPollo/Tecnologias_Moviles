import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <SafeAreaView>
                <Text>Left</Text>
              </SafeAreaView>
            ),
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "My home",
            }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
