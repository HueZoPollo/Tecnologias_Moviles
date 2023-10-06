import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Header from "../components/Header";
import { useAppContext } from "../hooks/useAppContext";
import { StyledText } from "../components/StyledText";
import Actions from "../components/Actions";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "../../assets";
import Box from "../components/Box";

const Home = ({ navigation }) => {
  const { theme } = useAppContext();

  const ACTIONS = [
    {
      id: 1,
      title: "Send",
      icon: "credit-card-minus-outline",
      onPress: () => navigation.navigate("Send"),
    },
    {
      id: 2,
      title: "Balance",
      icon: "credit-card-plus-outline",
      onPress: () => navigation.navigate("Balance"),
    },
    {
      id: 3,
      title: "Swap",
      icon: "reload",
      onPress: () => {},
    },
  ];

  const OPTIONS = [
    {
      id: 1,
      title: "Activity",
      color: theme.backgroundColorCustom,
      colorText: theme.textColor,
    },
    {
      id: 2,
      title: "Contacts",
      color: theme.buttonColor,
      colorText: theme.textColorButton,
    },
    {
      id: 3,
      title: "Payments",
      color: theme.backgroundColorCustom,
      colorText: theme.textColor,
    },
    {
      id: 4,
      title: "Sale",
      color: theme.backgroundColorCustom,
      colorText: theme.textColor,
    },
  ];

  const PERSON = [
    { id: 1, name: "Benjamin Parker", card: "**** 3294", img: Avatar },
    { id: 2, name: "Emma Davis", card: "**** 2352", img: Avatar },
    { id: 3, name: "Olivia Williams", card: "**** 3629", img: Avatar },
  ];
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    square: {
      borderRadius: 30,
      marginRight: 15,
      height: 170,
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColorCustom }}>
      <Header text={"Home"} />
      <View style={styles.container}>
        <StyledText
          text={"My Cards"}
          fontWeight={400}
          fontSize={40}
          color={theme.textColor}
        />
        <View>
          <ScrollView horizontal={true} style={{ marginTop: 20 }}>
            <View
              style={[
                styles.square,
                {
                  width: 100,
                  backgroundColor: theme.buttonColor,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <StyledText
                text={"+"}
                color={theme.textColorButton}
                fontSize={30}
                fontWeight={"bold"}
              />
            </View>
            <View
              style={[
                styles.square,
                {
                  width: 300,
                  backgroundColor: theme.cardWhite,
                  padding: 20,
                  gap: 30,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      borderWidth: 2,
                      borderColor: theme.cardWhite,
                      backgroundColor: theme.textMinusColor,
                    }}
                  />
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      borderWidth: 2,
                      borderColor: theme.cardWhite,
                      backgroundColor: "rgba(52, 52, 52, 0.8)",
                      position: "absolute",
                      left: 20,
                    }}
                  />
                </View>
                <StyledText
                  text={"**** 4934"}
                  fontSize={20}
                  fontWeight={"bold"}
                  color={theme.textMinusColor}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <StyledText
                  text={"$13,397"}
                  color={theme.textCard}
                  fontSize={35}
                  fontWeight={"bold"}
                />
                <StyledText
                  text={".23"}
                  color={theme.textCard}
                  fontSize={30}
                  fontWeight={"bold"}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", gap: 15, marginTop: 20 }}>
          {ACTIONS.map((action) => {
            return (
              <Actions
                key={action.id}
                name={action.title}
                icon={action.icon}
                onPress={action.onPress}
              />
            );
          })}
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          {OPTIONS.map((action) => {
            return (
              <View
                key={action.id}
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  width: "auto",
                  height: 45,
                  paddingHorizontal: 14,
                  backgroundColor: action.color,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: theme.textMinusColor,
                }}
              >
                <StyledText
                  text={action.title}
                  fontSize={15}
                  color={action.colorText}
                />
              </View>
            );
          })}
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: theme.subMenuColor,
            padding: 15,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StyledText
              text={"My contacts"}
              fontSize={25}
              fontWeight={"bold"}
              color={theme.textColor}
            />
            <Feather name={"search"} size={25} color={theme.iconColor} />
          </View>
          <View style={{ marginTop: 10, maxHeight: 160 }}>
            <FlatList
              data={PERSON}
              renderItem={({ item: { name, card, img } }) => (
                <Box name={name} subName={card} img={img} />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ marginTop: 15 }} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
