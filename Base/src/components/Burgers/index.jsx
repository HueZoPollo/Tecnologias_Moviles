import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StyledImage } from "../StyledImage";
import { StyledText } from "../StyledText";

const Burgers = ({ name, img, price }) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledImage img={img} width={150} height={150} />
      </View>
      <View style={{ alignItems: "center" }}>
        <StyledText text={name} fontSize={22} fontWeight={"bold"} />
        <StyledText
          text={price}
          fontSize={28}
          fontWeight={"bold"}
          color={"#21b2b2"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#21b2b2",
    alignItems: "center",
    width: 240,
    height: 300,
    borderRadius: 20,
    justifyContent: "space-around",
  },
});

export default Burgers;
