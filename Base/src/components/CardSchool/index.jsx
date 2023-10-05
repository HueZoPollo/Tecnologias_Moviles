import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";s
import { useAppContext } from "../hooks/useAppContext";

const CardSchool = () => {
  const { person, handleIsActive } = useAppContext();

  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        CardSchool
      </Text>
      <Text>{person.school}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 10 }}
        onPress={handleIsActive}
      >
        <Text style={{ color: "white" }}>
          Is Active: {JSON.stringify(person.isActive)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardSchool;
