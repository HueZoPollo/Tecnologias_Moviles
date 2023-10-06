import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../hooks/useAppContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyledText } from "../StyledText";
import { useNavigation } from "@react-navigation/native";

const Actions = ({ name, icon, onPress, id }) => {
  const { navigation } = useNavigation();
  const { theme } = useAppContext();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.backgroundActionColor,
        width: 110,
        height: 100,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={25} color={theme.iconColor} />
      <StyledText
        text={name}
        fontWeight={400}
        fontSize={20}
        color={theme.buttonColor}
      />
    </TouchableOpacity>
  );
};

export default Actions;
