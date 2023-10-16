import { useAuthContext } from "../hooks/useAuthContexts";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Account from "../screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const Stack = createStackNavigator();

const Layout = () => {
  const { user } = useAuthContext();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Layout">
          {!user ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Account" component={Account} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Layout;
