import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/CustomHeader/Header";
import { StyledText } from "../components/StyledText";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyledTouchable } from "../components/StyledTouchable";

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header text={"$234 000 000"} />
      </View>
      <View style={styles.content}>
        <StyledText text={"UroMillions"} fontSize={19} />
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 20,
            backgroundColor: "#d3c4a8",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            width: 250,
          }}
        >
          <View style={styles.align}>
            <AntDesign name="calendar" size={24} color="black" />
            <StyledText text={"Today"} fontSize={19} />
          </View>
          <View style={styles.align}>
            <AntDesign name="clockcircleo" size={24} color="black" />
            <StyledText text={"10:11:00"} fontSize={19} />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            paddingTop: 20,
            borderRadius: 10,
            height: 170,
            marginTop: 10,
            backgroundColor: "#016f48",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              padding: 20,
              paddingHorizontal: 25,
              justifyContent: "space-between",
            }}
          >
            <StyledText
              text={"Ticket 1"}
              fontSize={18}
              color={"white"}
              fontWeight={"bold"}
            />
            <Ionicons name="reload" size={25} color="#6ca08e" />
          </View>
          <View
            style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}
          >
            <StyledText
              text={"1"}
              fontSize={18}
              color={"black"}
              width={60}
              height={60}
              fontWeight={"bold"}
              borderRadius={50}
              textAlign={"center"}
              textAlignVertical={"center"}
              backgroundColor={"#ffd73b"}
            />
            <StyledText
              text={"7"}
              fontSize={18}
              color={"black"}
              width={60}
              height={60}
              fontWeight={"bold"}
              borderRadius={50}
              textAlign={"center"}
              textAlignVertical={"center"}
              backgroundColor={"#ffd73b"}
            />
            <StyledText
              text={"14"}
              fontSize={18}
              color={"black"}
              width={60}
              height={60}
              fontWeight={"bold"}
              borderRadius={50}
              textAlign={"center"}
              textAlignVertical={"center"}
              backgroundColor={"#ffd73b"}
            />
            <StyledText
              text={"16"}
              fontSize={18}
              color={"black"}
              width={60}
              height={60}
              fontWeight={"bold"}
              borderRadius={50}
              textAlign={"center"}
              textAlignVertical={"center"}
              backgroundColor={"#ffd73b"}
            />
            <StyledText
              text={"19"}
              fontSize={18}
              color={"black"}
              width={60}
              height={60}
              fontWeight={"bold"}
              borderRadius={50}
              textAlign={"center"}
              textAlignVertical={"center"}
              backgroundColor={"#ffd73b"}
            />
          </View>
        </View>
        <View
          style={{ flexDirection: "row", gap: 5, paddingTop: 5, padding: 5 }}
        >
          <View style={styles.square}>
            <StyledText
              text={"Rate type"}
              color={"#b1b1b1"}
              fontSize={15}
              fontWeight={"bold"}
            />
            <StyledText
              text={"One time bet"}
              fontSize={20}
              fontWeight={"bold"}
            />
            <AntDesign
              name="checkcircle"
              size={30}
              color="#f77639"
              style={{
                alignSelf: "flex-end",
                marginTop: 50,
                backgroundColor: "white",
                borderRadius: 50,
              }}
            />
          </View>
          <View style={styles.square}>
            <StyledText
              text={"Rate type"}
              color={"#b1b1b1"}
              fontSize={15}
              fontWeight={"bold"}
            />
            <StyledText
              text={"Subscription"}
              fontSize={20}
              fontWeight={"bold"}
            />
            <AntDesign
              name="checkcircle"
              size={30}
              color="#eeedeb"
              style={{
                alignSelf: "flex-end",
                marginTop: 50,
                backgroundColor: "black",
                borderRadius: 50,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 150 }}>
          <StyledTouchable
            text={"Watch Results"}
            width={200}
            backgroundColor={"#016f48"}
            height={60}
            borderRadius={30}
            textAlign={"center"}
            fontSize={17}
            color={"white"}
            fontWeight={"bold"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecdcc2",
    flex: 1,
  },
  content: {
    alignItems: "center",
    padding: 7,
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  square: {
    backgroundColor: "white",
    width: "50%",
    height: 200,
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
});

export default Login;
