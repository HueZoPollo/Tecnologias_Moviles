import { Text, View, StyleSheet } from "react-native";
import { StyledInput } from "../StyledComponents/TextInput";
import { StyledText } from "../StyledComponents/Text";
import { StyledTouchable } from "../StyledComponents/Touchable";

export default function LoginContent() {
  return (
    <View style={styles.container}>
      <StyledInput
        placeholder={"Email"}
        borderRadius={10}
        borderWidth={1}
        width={300}
        borderColor={"#C3C2C2"}
        height={50}
        paddingHorizontal={8}
      />
      <StyledInput
        placeholder={"Password"}
        borderRadius={10}
        borderWidth={1}
        width={300}
        borderColor={"#C3C2C2"}
        height={50}
        paddingHorizontal={8}
        pass={true}
      />
      <StyledText
        text={"Forgot Password?"}
        fontSize={12}
        fontWeight={400}
        color={"#C3C2C2"}
        width={300}
        textAlign={"right"}
      />
      <StyledTouchable
        backgroundColor={"#C3F7BB"}
        padding={10}
        borderRadius={10}
        width={300}
        height={45}
        text={"Login"}
        fontSize={17}
        color={"#000"}
        textAlign={"center"}
        fontWeight={"500"}
      />
      <StyledText
        text={"Or login with"}
        fontSize={13}
        fontWeight={400}
        color={"#000"}
        width={300}
        textAlign={"center"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    backgroundColor: "#fff",
    gap: 20,
    marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
  },
});
