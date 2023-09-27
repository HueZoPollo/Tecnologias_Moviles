import React from "react";
import { Button, Text, View } from "react-native";
import Header from "../components/CustomHeader/Header";

const Home = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Text>Home</Text>
      <Button
        title="Go to the login page"
        onPress={() => navigation.navigate("Login", { name: "Héctor" })}
      />
    </View>
  );
};

export default Home;
