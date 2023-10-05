import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardId from "../CardId";
import CardFooter from "../CardFooter";
import { useAppContext } from "../hooks/useAppContext";

const Card = () => {
  const { person } = useAppContext();
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
        backgroundColor: !person.isActive ? "red" : "green",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        Card Component
      </Text>
      <CardId />
      <Text style={{ fontSize: 20 }}>Name: {person.name}</Text>
      <Text style={{ fontSize: 20 }}>Lastname: {person.lastname}</Text>
      <CardFooter />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
