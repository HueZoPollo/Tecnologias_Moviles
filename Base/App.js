import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import React from "react";
import AuthContextProvider from "./src/context/AuthContext";
import ThemeContextProvider from "./src/context/ThemeContext";
import Home from "./src/pages/Home";
import Explore from "./src/pages/Explore";
import Profile from "./src/pages/Profile";
import Favorites from "./src/pages/Favorites";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              activeColor="#000"
              shifting={true}
              barStyle={{}}
              screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
              }}
            >
              <Tab.Screen
                options={{
                  tabBarIcon: <Feather name="home" size={24} color="black" />,
                }}
                name="Home"
                component={Home}
              />
              <Tab.Screen name="Explore" component={Explore} />
              <Tab.Screen name="Profile" component={Profile} />
              <Tab.Screen name="Favorites" component={Favorites} />
            </Tab.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#000",
  },
});

{
  /* <FlatList
        data={tasks}
        renderItem={({ item: { id, task, isCompleted } }) => (
          <Todo
            task={task}
            isCompleted={isCompleted}
            id={id}
            handleDelete={handleDeleteTask}
            handleComplete={handleCompleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
      /> */
}
