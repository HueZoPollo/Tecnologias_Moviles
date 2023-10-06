import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import { useAppContext } from "../hooks/useAppContext";
import { StyledText } from "../components/StyledText";
import { StyledImage } from "../components/StyledImage";
import { Chart } from "../../assets";
import Box from "../components/Box";

const Balance = () => {
  const { theme } = useAppContext();
  const FILTERS = [
    { id: 1, title: "Day", active: false },
    { id: 2, title: "Week", active: false },
    { id: 3, title: "Month", active: true },
    { id: 4, title: "Year", active: false },
  ];

  const TRANSACTIONS = [
    {
      id: 1,
      name: "Ethan Johnson",
      date: "May 7, 2023",
      price: "+$1,220.00",
      icon: "credit-card-plus-outline",
    },
    {
      id: 2,
      name: "Benjamin Parker",
      date: "May 7, 2023",
      price: "-$10.00",
      icon: "credit-card-minus-outline",
    },
    {
      id: 3,
      name: "Ema Davis",
      date: "May 6, 2023",
      price: "+$120.00",
      icon: "credit-card-plus-outline",
    },
    {
      id: 4,
      name: "Ethan Johnson",
      date: "May 1, 2023",
      price: "-$500.00",
      icon: "credit-card-minus-outline",
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColorCustom,
      }}
    >
      <Header text="Balance" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <StyledText
          text="Total Balance"
          color={theme.textMinusColor}
          fontSize={18}
          fontWeight={300}
        />
        <StyledText
          text="$32,751.75"
          color={theme.textColor}
          fontSize={45}
          fontWeight={400}
        />
        <View style={{ flexDirection: "row", gap: 25, marginTop: 20 }}>
          {FILTERS.map((item) => (
            <View key={item.id}>
              <StyledText
                text={item.title}
                color={item.active ? theme.buttonColor : theme.textMinusColor}
                fontSize={18}
                fontWeight={300}
              />
            </View>
          ))}
        </View>
        <View style={{ marginTop: 20 }}>
          <StyledImage img={Chart} width={400} height={280} />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: theme.buttonColor,
            padding: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            width: "100%",
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
              color={theme.textColorButton}
            />
            <StyledText
              text={"See all"}
              fontSize={15}
              fontWeight={300}
              color={theme.textMinusColor}
            />
          </View>
          <View style={{ marginTop: 10, maxHeight: 170 }}>
            <FlatList
              data={TRANSACTIONS}
              renderItem={({ item: { name, date, price, icon } }) => {
                return (
                  <Box name={name} subName={date} price={price} icon={icon} />
                );
              }}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ marginTop: 15 }} />}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Balance;
