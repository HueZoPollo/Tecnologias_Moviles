import React from "react";
import { Text, View } from "react-native";

const Login = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View>
      <Text>Login</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Login;
