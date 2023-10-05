import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardLocation from "../CardLocation";
import { useAppContext } from "../hooks/useAppContext";

const CardFooter = () => {
  const { person } = useAppContext();
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Card Footer
      </Text>
      <CardLocation />
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({});
