import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { StyledText } from "../components/StyledText";
import { StyledTouchable } from "../components/StyledTouchable";
import { Bingo } from "../../assets";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <StyledText
          text={"Play and Win!"}
          color={"white"}
          fontSize={40}
          fontWeight={"bold"}
        />
        <StyledText
          text={"Game for anyone who likes to try luck at guessing numbers."}
          color={"#6ca08e"}
          fontSize={15}
          textAlign={"center"}
          width={250}
        />
      </View>
      <Image source={Bingo} style={{ width: 340, height: 400 }} />
      <StyledTouchable
        text={"Get Started"}
        backgroundColor={"#f7793c"}
        color={"white"}
        width={150}
        height={60}
        textAlign={"center"}
        fontSize={20}
        fontWeight={"bold"}
        borderRadius={30}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e6e49",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});

export default Home;
