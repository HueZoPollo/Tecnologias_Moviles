import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContexts";

const Account = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut } = useAuthContext();

  const handleLogOut = async () => {
    try {
      await onLogOut();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Button title="Cerrar sesion" onPress={() => handleLogOut()} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
