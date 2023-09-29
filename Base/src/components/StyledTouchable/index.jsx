import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { StyledText } from "../StyledText";

export const StyledTouchable = ({
  backgroundColor,
  padding,
  borderRadius,
  borderColor,
  borderWidth,
  width,
  height,
  text,
  fontSize,
  color,
  textAlign,
  fontWeight,
  onPress,
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
      }}
      onPress={onPress}
    >
      <StyledText
        text={text}
        fontSize={fontSize}
        color={color}
        textAlign={textAlign}
        fontWeight={fontWeight}
      />
    </TouchableOpacity>
  );
};
