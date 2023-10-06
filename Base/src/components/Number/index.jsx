import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
import { useAppContext } from "../../hooks/useAppContext";

const Numero = ({ text }) => {
  const { theme } = useAppContext();
  const styles = StyleSheet.create({
    container: {
      width: 120,
      height: 80,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.backgroundActionColor,
      borderRadius: 40,
      marginLeft: 3,
    },
  });
  return (
    <View style={styles.container}>
      <StyledText
        text={text}
        color={theme.textColor}
        fontSize={30}
        fontWeight={"bold"}
      />
    </View>
  );
};

export default Numero;
