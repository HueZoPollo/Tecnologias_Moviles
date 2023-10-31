import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, role, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        role === "number"
          ? styles.numberContainer
          : role === "operator"
          ? styles.operatorContainer
          : styles.equalContainer,
      ]}
      onPress={() => onPress(text)}
    >
      <Text
        style={[
          styles.text,
          role === "number"
            ? styles.numberText
            : role === "operator"
            ? styles.operatorText
            : styles.equalText,
        ]}
      >
        {text}
      </Text>
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
    borderRadius: 40,
  },

  numberContainer: {
    backgroundColor: "white",
  },

  operatorContainer: {
    backgroundColor: "#f7e3e5",
  },

  equalContainer: {
    backgroundColor: "#ff6877",
    width: 140,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },

  numberText: {
    color: "#aaaaaa",
  },

  operatorText: {
    color: "#ff6877",
  },

  equalText: {
    color: "white",
  },
});

export default Button;
