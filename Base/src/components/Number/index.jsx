import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";

const Numero = ({ text }) => {
  return (
    <View style={styles.container}>
      <StyledText
        text={text}
        color={"white"}
        fontSize={30}
        fontWeight={"bold"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161616",
    borderRadius: 40,
    marginLeft: 3,
  },
});

export default Numero;
