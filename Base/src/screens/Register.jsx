import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderStack from "../components/CustomHeader/HeaderStack";
import { StyledText } from "../components/StyledText";
import { StyledInput } from "../components/StyledInput";
import { useNavigation } from "@react-navigation/native";
import { StyledTouchable } from "../components/StyledTouchable";

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderStack />
      <View style={{ marginTop: 20, padding: 25 }}>
        <StyledText text={"Sign Up"} fontSize={35} fontWeight={"bold"} />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <StyledText text={"Already have an account?"} fontSize={15} />
          <StyledText
            text={"Login"}
            fontSize={15}
            fontWeight={"bold"}
            color={"#21b2b2"}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <StyledText text={"Name"} fontSize={15} fontWeight={"bold"} />
            <StyledInput
              placeholder={"Name"}
              borderWidth={1}
              borderColor={"#cdcdcd"}
              paddingHorizontal={10}
              height={50}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <StyledText text={"Email"} fontSize={15} fontWeight={"bold"} />
            <StyledInput
              placeholder={"Email"}
              borderWidth={1}
              borderColor={"#cdcdcd"}
              paddingHorizontal={10}
              height={50}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <StyledText text={"Password"} fontSize={15} fontWeight={"bold"} />
            <StyledInput
              placeholder={"Password"}
              borderWidth={1}
              borderColor={"#cdcdcd"}
              paddingHorizontal={10}
              height={50}
            />
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <StyledTouchable
            text={"Sign Up"}
            width={"100%"}
            height={50}
            backgroundColor={"#21b2b2"}
            borderRadius={20}
            fontSize={18}
            fontWeight={"bold"}
            color={"#fff"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <StyledText
            text={"By signing up, you are agreeing to our"}
            fontSize={15}
          />
          <StyledText
            text={" Terms of"}
            fontSize={15}
            fontWeight={"bold"}
            color={"#21b2b2"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <StyledText
            text={"Service"}
            fontSize={15}
            fontWeight={"bold"}
            color={"#21b2b2"}
          />
          <StyledText text={" and"} fontSize={15} />
          <StyledText
            text={" Privacy Policy."}
            fontSize={15}
            fontWeight={"bold"}
            color={"#21b2b2"}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
