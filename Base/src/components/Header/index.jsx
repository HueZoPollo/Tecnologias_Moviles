import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "../StyledText";
import { useAppContext } from "../../hooks/useAppContext";
import { Avatar } from "../../../assets";

const Header = ({ text }) => {
  const { theme, toggleTheme } = useAppContext();

  const { canGoBack, goBack } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: theme.backgroundColorCustom,
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      {text === "Home" ? (
        <Image source={Avatar} style={{ width: 50, height: 50 }} />
      ) : (
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
          <Ionicons name="arrow-back" size={23} color={theme.iconColor} />
        </TouchableOpacity>
      )}
      {text === "Home" ? null : text === "Balance" ? null : (
        <StyledText
          text={text}
          color={theme.textColor}
          fontSize={20}
          fontWeight={300}
        />
      )}
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
        onPress={() => toggleTheme()}
      >
        <Ionicons name={theme.icon} size={23} color={theme.iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
