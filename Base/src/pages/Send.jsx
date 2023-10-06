import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Header from "../components/Header";
import { StyledImage } from "../components/StyledImage";
import { Avatar } from "../../assets";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyledText } from "../components/StyledText";
import { StyledTouchable } from "../components/StyledTouchable";
import Numero from "../components/Number";
import { useAppContext } from "../hooks/useAppContext";

const Send = () => {
  const { theme } = useAppContext();
  const data = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "<" },
    { id: 11, name: "0" },
    { id: 12, name: "." },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColorCustom,
    },
    icon: {
      width: 45,
      height: 45,
      backgroundColor: theme.buttonColor,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      position: "absolute",
      right: 0,
      left: 200,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Send" />
      <View style={{}}>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <StyledImage img={Avatar} width={50} height={50} />
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="credit-card-check-outline"
              size={25}
              color={theme.iconColorBlack}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <StyledText
            text="Benjamin Parker"
            color={theme.textColor}
            fontSize={23}
            fontWeight={300}
          />
          <StyledText
            text="**** 3294"
            color={theme.textMinusColor}
            fontSize={15}
            fontWeight={200}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <StyledText
            text="$340"
            color={theme.textColor}
            fontSize={50}
            fontWeight={500}
            fontFamily={"Roboto"}
          />
          <View
            style={{
              borderLeftWidth: 3,
              width: 1,
              borderLeftColor: theme.buttonColor,
            }}
          ></View>
          <StyledText
            text=".00"
            color={theme.textMinusColor}
            fontSize={50}
            fontWeight={500}
          />
        </View>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <FlatList
            data={data}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { name }, index }) => <Numero text={name} />}
            ItemSeparatorComponent={() => <View style={{ marginTop: 4 }} />}
          />
        </View>
        <View style={{ alignItems: "center", padding: 10, marginTop: 10 }}>
          <StyledTouchable
            text={"Send"}
            color={theme.textColorButton}
            fontWeight={"bold"}
            fontSize={20}
            width={"100%"}
            height={60}
            borderRadius={30}
            backgroundColor={theme.buttonColor}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Send;
