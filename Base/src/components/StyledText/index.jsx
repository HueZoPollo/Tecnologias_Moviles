import { Text } from "react-native";

export const StyledText = ({
  text,
  fontSize,
  color,
  fontWeight,
  fontFamily,
  backgroundColor,
  borderRadius,
  margin,
  width,
  textAlign,
  textAlignVertical,
  onPress,
}) => {
  return (
    <Text
      style={{
        fontSize,
        color,
        fontWeight,
        fontFamily,
        backgroundColor,
        borderRadius,
        margin,
        width,
        textAlign,
        textAlignVertical,
      }}
      onPress={onPress}
    >
      {text}
    </Text>
  );
};
