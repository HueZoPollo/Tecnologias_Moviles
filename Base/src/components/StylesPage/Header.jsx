import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyledImage } from "../StyledImage";
import { Avatar } from "../../../assets";
export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Ionicons name="notifications-outline" size={24} color="blue" />
      <StyledImage img={Avatar} width={50} height={50} />
    </View>
  );
}
