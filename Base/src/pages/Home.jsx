import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useThemeContext } from "../hooks/useThemeContext";
import { StyledText } from "../components/StyledText";
import { StyledImage } from "../components/StyledImage";
import { AvatarM } from "../../assets";
import { Food } from "../../assets";
import { Feather } from "@expo/vector-icons";

const OPTIONS = [
  { id: 1, name: "All" },
  { id: 2, name: "New" },
  { id: 3, name: "Most viewed" },
  { id: 4, name: "Most" },
  { id: 5, name: "Most" },
];

const COLLECTIONS = [
  { id: 1, name: "Travel", img: Food },
  { id: 2, name: "Food", img: Food },
  { id: 3, name: "Vintage", img: Food },
  { id: 4, name: "Nature", img: Food },
];

const RECOMMNED = [
  { id: 1, img: Food },
  { id: 2, img: Food },
  { id: 3, img: Food },
];

const Home = () => {
  const { theme } = useThemeContext();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1f1d2b",
        padding: 20,
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledText
          text="Snap Sync"
          fontSize={20}
          color="white"
          fontWeight={"bold"}
        />
        <StyledImage img={AvatarM} width={30} height={30} />
      </View>
      <View
        style={{
          backgroundColor: "#252837",
          borderRadius: 15,
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <StyledText text="Search" fontSize={20} color="#5f616a" />
        <Feather name="search" size={24} color="white" />
      </View>
      <View>
        <FlatList
          data={OPTIONS}
          renderItem={({ item: { id, name } }) => (
            <View
              style={{
                backgroundColor: "#252837",
                borderRadius: 20,
                width: 150,
                height: 40,
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <StyledText text={name} fontSize={20} color="white" />
            </View>
          )}
          horizontal={true}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginLeft: 10 }} />}
        />
      </View>
      <View style={{ marginTop: 10, gap: 10 }}>
        <StyledText
          text="Collections"
          fontSize={25}
          fontWeight={"bold"}
          color="white"
        />
        <FlatList
          data={COLLECTIONS}
          renderItem={({ item: { id, name, img } }) => (
            <View
              style={{
                borderRadius: 20,
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <Image
                source={img}
                style={{
                  width: 85,
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <View
                style={{
                  backgroundColor: "rgba(0,0,0, 0.6)",
                  width: 85,
                  position: "absolute",
                  bottom: 0,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: "center",
                }}
              >
                <StyledText
                  text={name}
                  fontSize={18}
                  fontWeight={"bold"}
                  color="white"
                />
              </View>
            </View>
          )}
          horizontal={true}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginLeft: 10 }} />}
        />
      </View>
      <View style={{ marginTop: 10, gap: 15 }}>
        <StyledText
          text="Recommended"
          fontSize={25}
          color="white"
          fontWeight={"bold"}
        />
        <FlatList
          style={{ maxHeight: 280 }}
          data={RECOMMNED}
          renderItem={({ item: { id, img } }) => (
            <Image
              source={img}
              style={{ width: "100%", height: 150, borderRadius: 20 }}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginTop: 20 }} />}
        />
      </View>
    </View>
  );
};

export default Home;
