import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StyledTouchableIcon = ({
  backgroundColor,
  padding,
  borderRadius,
  borderColor,
  borderWidth,
  width,
  height,
  onPress,
  icon,
  color,
  size,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        padding,
        borderRadius,
        borderColor,
        borderWidth,
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
        <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};
