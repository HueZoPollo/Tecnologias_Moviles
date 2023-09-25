import React from "react";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to the login page"
        onPress={() => navigation.navigate("Login", { name: "Héctor" })}
      />
    </View>
  );
};

export default Home;
