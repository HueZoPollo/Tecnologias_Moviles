import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppContext } from "../hooks/useAppContext";

const CardId = () => {
  const { person } = useAppContext();
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ textAlign: "center", fontSize: 25 }}>ID: {person.id}</Text>
    </View>
  );
};

export default CardId;

const styles = StyleSheet.create({});
