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
    >
      {text}
    </Text>
  );
};
