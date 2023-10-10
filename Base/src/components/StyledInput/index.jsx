import { TextInput } from "react-native";

export const StyledInput = ({
  width,
  placeholder,
  borderRadius,
  borderWidth,
  borderColor,
  paddingHorizontal,
  height,
  pass,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        width,
        borderRadius,
        borderWidth,
        borderColor,
        paddingHorizontal,
        height,
      }}
      secureTextEntry={pass}
      onChangeText={onChangeText}
      value={value}
    ></TextInput>
  );
};
