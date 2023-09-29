import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StyledText } from "../StyledText";

const Header = ({ text }) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#ecdcc2",
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <AntDesign
        name="left"
        size={18}
        color="#b1b1b1"
        onPress={() => goBack()}
        disabled={!canGoBack()}
      />
      <StyledText
        text={text}
        color={"black"}
        fontSize={30}
        fontWeight={"bold"}
      />
      <Feather name="x" size={18} color="#b1b1b1" />
    </View>
  );
};

export default Header;
