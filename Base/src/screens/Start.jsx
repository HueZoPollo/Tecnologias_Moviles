import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyledText } from "../components/StyledText";
import { StyledTouchable } from "../components/StyledTouchable";
import { Pizza } from "../../assets";
import { StyledImage } from "../components/StyledImage";
import { useAuthContext } from "../hooks/useAuthContexts";

const Start = () => {
  const { user } = useAuthContext();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StyledImage img={Pizza} width={340} height={340} />
      <StyledText
        text={"Shopping with best e-commerce store"}
        fontSize={35}
        textAlign={"center"}
        fontWeight={"bold"}
      />
      <StyledText
        text={
          "Find best shopping experience with us by your favourite daily needs!"
        }
        fontSize={13}
        textAlign={"center"}
        width={"60%"}
      />
      <View style={{ marginTop: 70, width: "100%" }}>
        <StyledTouchable
          text={"Get Started"}
          width={"100%"}
          fontWeight={"bold"}
          height={50}
          backgroundColor={"#21b2b2"}
          color={"#fff"}
          fontSize={18}
          borderRadius={20}
          onPress={() => {
            if (user) {
              navigation.navigate("StartNav", { screen: "HomeNav" });
            } else {
              navigation.navigate("Login", { screen: "Login" });
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
});

export default Start;
