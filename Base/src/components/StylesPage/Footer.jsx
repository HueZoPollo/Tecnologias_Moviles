import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Footer() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 15,
        width: "100%",
        height: 50,
      }}
    >
        <Ionicons name="home" size={24} color="#3562D7" />
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#CAD5F3" />
        <Ionicons name="calendar-outline" size={24} color="#CAD5F3" />
        <Ionicons name="person" size={24} color="#CAD5F3" />
    </View>
  );
}
