import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/CustomHeader/Header";

const Login = ({ route }) => {
  const { name } = route.params;

  const { canGoBack, goBack } = useNavigation();

  // console.log(navigation);

  return (
    <View>
      <Text>Login</Text>
      <Text>{name}</Text>
      <Button title="Go back" disabled={!canGoBack} onPress={() => goBack()} />
    </View>
  );
};

export default Login;
