import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Characters from "./src/screens/Characters";
import Info from "./src/screens/Info";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Characters"
            component={Characters}
            options={{
              headerStyle: {
                backgroundColor: "#272b33",
              },
              headerTintColor: "#95887c",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{
              headerStyle: {
                backgroundColor: "#272b33",
              },
              headerTintColor: "#95887c",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" backgroundColor="#272b33" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272b33",
    marginTop: Constants.statusBarHeight,
  },
});
