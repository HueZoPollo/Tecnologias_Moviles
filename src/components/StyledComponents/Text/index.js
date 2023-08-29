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
      }}
    >
      {text}
    </Text>
  );
};
