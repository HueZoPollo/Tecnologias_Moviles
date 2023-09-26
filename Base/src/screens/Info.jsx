import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StyledText } from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";

const Info = ({ route, navigation }) => {
  const { id } = route.params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <StyledText
        text={character.name}
        fontSize={30}
        color="white"
        fontWeight="bold"
      />
      <Image source={{ uri: character.image }} style={styles.image} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingTop: 20,
        }}
      >
        <StyledText
          text={`Status: ${character.status}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <Ionicons
          name="ellipse"
          size={20}
          color={
            character.status === "Alive"
              ? "#55cc44"
              : character.status === "Dead"
              ? "#d63d2e"
              : "#d6d63d"
          }
        />
      </View>
      <View style={{ gap: 10, alignItems: "center" }}>
        <StyledText
          text={`Species: ${character.species}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <StyledText
          text={`Gender: ${character.gender}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <StyledText
          text={`Type: ${character.type?.length > 0 ? character.type : "N/A"}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <StyledText
          text={`Origin: ${character.origin?.name}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <StyledText
          text={`Location: ${character.location?.name}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <StyledText
          text={`Total Episodes: ${character.episode?.length}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
        <StyledText
          text={`Created: ${character.created?.slice(0, 10)}`}
          color="white"
          fontWeight={"bold"}
          fontSize={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
    paddingTop: 20,
    gap: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
});

export default Info;
