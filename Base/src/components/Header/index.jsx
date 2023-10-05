import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { StyledText } from "../StyledText";

const Header = ({ text }) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#0d0d0d",
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderWidth: 1,
          borderColor: "#161616",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => goBack()}
        disabled={!canGoBack()}
      >
        <Ionicons name="arrow-back" size={23} color="white" />
      </TouchableOpacity>
      <StyledText text={text} color={"white"} fontSize={20} fontWeight={300} />
      <MaterialIcons name="wb-sunny" size={23} color="white" />
    </View>
  );
};

export default Header;
