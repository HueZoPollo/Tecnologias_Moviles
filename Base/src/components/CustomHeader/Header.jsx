import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { getDrawerStatusFromState } from "@react-navigation/drawer";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderWidth: 0.5,
          borderColor: "#cdcdcd",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign
          name="appstore-o"
          size={24}
          color="#21b2b2"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View
        style={{
          width: 50,
          height: 50,
          borderWidth: 0.5,
          borderColor: "#cdcdcd",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
