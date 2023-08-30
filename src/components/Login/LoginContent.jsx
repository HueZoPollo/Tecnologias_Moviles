import { Text, View, StyleSheet, Image } from "react-native";
import { StyledInput } from "../StyledComponents/TextInput";
import { StyledText } from "../StyledComponents/Text";
import { StyledTouchable } from "../StyledComponents/Touchable";

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
        <View style={styles.btns}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?pid=ImgDet&rs=1",
            }}
            width={20}
            height={20}
          />
          <StyledTouchable text={"Google"} />
        </View>
        <View style={styles.btns}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.f59a002cab3296be34d375dd745facfc?rik=RPJR10%2fPWeZo8Q&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffacebook-transparent-icon%2ffacebook-transparent-icon-17.png&ehk=LHqX%2fzdtfl21xpJlTRjnltkVWpiWZ%2f1mnN75SUvclxc%3d&risl=&pid=ImgRaw&r=0",
            }}
            width={20}
            height={20}
          />
          <StyledTouchable text={"Facebook"} />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
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
          color={"#C3F7BB"}
          textAlign={"center"}
        />
      </View>
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
    gap: 80,
    padding: 20,
  },
  btns: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#C3C2C2",
  },
});
