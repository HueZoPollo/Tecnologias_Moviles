import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
import { Ionicons } from "@expo/vector-icons";

const Character = ({ nombre, imagen, genero, estado, ocupacion }) => {
  const status = estado === "Vivo" ? "green" : "red";
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: imagen }} style={{ width: 200, height: 400 }} />
      <View style={styles.container}>
        <StyledText
          text={nombre}
          fontSize={30}
          width={150}
          fontWeight={"bold"}
        />
        <StyledText text={genero} fontSize={20} width={150} />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <StyledText text={estado} fontSize={20} />
          <Ionicons name="ellipse" size={20} color={status} />
        </View>
        <View>
          <StyledText
            text={"Ocupación: "}
            fontSize={20}
            width={150}
            fontWeight={"bold"}
          />
          <StyledText text={ocupacion} fontSize={17} width={150} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginLeft: 10,
    gap: 10,
  },
});

export default Character;
