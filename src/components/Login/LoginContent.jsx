import { View, StyleSheet } from "react-native";
import { StyledInput } from "../StyledComponents/TextInput";
import { StyledText } from "../StyledComponents/Text";
import { StyledTouchable } from "../StyledComponents/Touchable";
import { IconButton } from "../StyledComponents/IconButton";
import { facebook, google } from "../../../assets";

export default function LoginContent() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
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
          color={"#94A967"}
          width={300}
          textAlign={"right"}
        />
        <StyledTouchable
          backgroundColor={"#C0E863"}
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
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.line}></View>
        <StyledText
          text={"Or login with"}
          fontSize={13}
          fontWeight={400}
          color={"#000"}
          textAlign={"center"}
        />
        <View style={styles.line}></View>
      </View>
      <View style={styles.btnContainer}>
        <IconButton
          name={google}
          text={"Google"}
          fontSize={15}
          widthImage={20}
          heightImage={20}
          color={"#000"}
          width={130}
          height={40}
          borderWidth={1}
          flexDirection={"row"}
          borderRadius={8}
          borderColor={"#C3C2C2"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
        />
        <IconButton
          name={facebook}
          text={"Facebook"}
          fontSize={15}
          widthImage={20}
          heightImage={20}
          color={"#000"}
          width={130}
          height={40}
          borderWidth={1}
          flexDirection={"row"}
          borderRadius={8}
          borderColor={"#C3C2C2"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
        />
      </View>
      <View style={{ flexDirection: "row", flex: 1, gap: 20, alignItems: "flex-end", marginBottom: 10 }}>
        <StyledText
          text={"Don't have an account?"}
          fontSize={13}
          fontWeight={400}
          color={"#000"}
          textAlign={"center"}
        />
        <StyledText
          text={"Register"}
          fontSize={13}
          fontWeight={400}
          color={"#94A967"}
          textAlign={"center"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .70,
    backgroundColor: "#fff",
    gap: 20,
    marginTop: 50,
    // justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    borderBottomWidth: 1,
    width: 90,
    marginBottom: 8,
    borderColor: "#C3C2C2",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 50,
    padding: 20,
  },
});
