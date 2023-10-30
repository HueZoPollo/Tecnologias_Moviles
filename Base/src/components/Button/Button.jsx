import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, role, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        role === "number" ? styles.numberContainer : styles.operatorContainer,
      ]}
      onPress={() => onPress(text)}
    >
      <Text style={styles.numberText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  numberContainer: {
    backgroundColor: "blue",
  },

  operatorContainer: {
    backgroundColor: "gray",
  },

  numberText: {
    fontSize: 24,
    color: "white",
  },
});

export default Button;
