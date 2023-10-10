import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const HeaderStack = () => {
  const { goBack, canGoBack } = useNavigation();
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      {canGoBack() && (
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={() => goBack()}
        />
      )}
    </View>
  );
};

export default HeaderStack;
