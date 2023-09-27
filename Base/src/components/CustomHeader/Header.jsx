import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#f4511e",
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        paddingStart: 10,
        gap: 10,
      }}
    >
      {canGoBack() && (
        <AntDesign
          name="leftcircleo"
          size={24}
          color="white"
          onPress={() => goBack()}
          disabled={!canGoBack()}
        />
      )}
      <Text style={{ color: "white", fontSize: 24 }}>Header</Text>
    </View>
  );
};

export default Header;
