import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/CustomHeader/Header";
import { StyledText } from "../components/StyledText";
import { StyledImage } from "../components/StyledImage";
import { Ionicons } from "@expo/vector-icons";
import { Pizza } from "../../assets";
import Burgers from "../components/Burgers";
import { Burger } from "../../assets";

const Home = () => {
  const navigation = useNavigation();

  const data = [
    { id: 1, name: "Chicken burger", price: "$24.99", img: Burger },
    { id: 2, name: "Burger", price: "$24.99", img: Burger },
    { id: 3, name: "Chicken burger", price: "$24.99", img: Burger },
    { id: 4, name: "Burger", price: "$24.99", img: Burger },
  ];

  const filter = [
    { id: 1, name: "Burgers", back: "#21b2b2" },
    { id: 2, name: "Snacks", back: "#fff" },
    { id: 3, name: "Drinks", back: "#fff" },
    { id: 4, name: "Sushi", back: "#fff" },
    { id: 5, name: "Desserts", back: "#fff" },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20, marginTop: 20 }}>
        <StyledText
          text={"Store for fast food & etc."}
          fontSize={23}
          fontWeight={"bold"}
        />
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 50,
            backgroundColor: "#f1f6f6",
            gap: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Ionicons name="search" size={24} color="#21b2b2" />
          <StyledText text={"burgers"} fontSize={17} />
          <Ionicons
            name="options"
            size={24}
            color="black"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <FlatList
          style={{ marginTop: 30 }}
          data={filter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: { name, back } }) => (
            <View
              style={{
                width: 100,
                height: 40,
                borderWidth: 0.5,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderColor: "#cdcdcd",
                backgroundColor: back,
              }}
            >
              <StyledText
                text={name}
                fontSize={14}
                color={back === "#fff" ? "#cdcdcd" : "white"}
                {...(back !== "#fff" && { fontWeight: "bold" })}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ marginLeft: 20 }} />}
        />
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: { name, img, price } }) => (
              <Burgers name={name} img={img} price={price} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ marginLeft: 10 }} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
