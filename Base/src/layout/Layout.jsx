import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Start from "../screens/Start";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "../Context/AuthContext";
import Register from "../screens/Register";
import { useAuthContext } from "../hooks/useAuthContexts";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/CustomHeader/Header";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const handleLogOut = () => {
  const { handleLogOut: onLogOut } = useAuthContext();
  const navigation = useNavigation();
  try {
    const logoutValue = async () => {
      await onLogOut();
    };
    logoutValue();
    setTimeout(() => {
      navigation.navigate("Login");
    }, 100);
  } catch (error) {
    console.log(error);
  }
};

function StartNav() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeNav" component={HomeNav} />
      <Drawer.Screen name="LogOut" children={handleLogOut} />
    </Drawer.Navigator>
  );
}

function HomeNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#21b2b2",
        tabBarInactiveTintColor: "#cdcdcd",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          marginTop: -10,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <View>
                <Ionicons name="compass" size={24} color={"#21b2b2"} />
              </View>
            ) : (
              <Ionicons name="compass" size={24} color={"#cdcdcd"} />
            ),
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        children={Header}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <View>
                <Ionicons name="heart-outline" size={24} color={"#21b2b2"} />
              </View>
            ) : (
              <Ionicons name="heart-outline" size={24} color={"#cdcdcd"} />
            ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        children={Header}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#21b2b2",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: -10,
              }}
            >
              <Ionicons name="cart-outline" size={30} color={"white"} />
            </View>
          ),
          tabBarLabelStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="Orders"
        children={Header}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <View>
                <Ionicons name="receipt-outline" size={24} color={"#21b2b2"} />
              </View>
            ) : (
              <Ionicons name="receipt-outline" size={24} color={"#cdcdcd"} />
            ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        children={Header}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <View>
                <Ionicons name="person-outline" size={24} color={"#21b2b2"} />
              </View>
            ) : (
              <Ionicons name="person-outline" size={24} color={"#cdcdcd"} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Layout() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* {Layout()} */}
            <Stack.Screen name="StartNav" component={StartNav} />
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
