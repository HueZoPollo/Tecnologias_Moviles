import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { StyledText } from "../StyledText";
import { Ionicons } from "@expo/vector-icons";

const Character = ({ name, status, species, location, episode, image }) => {
  const [episodes, setEpisodes] = useState([]);
  const clr =
    status === "Alive" ? "#55cc44" : status === "Dead" ? "#d63d2e" : "#d6d63d";

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const response = await fetch(episode[0]);
        const data = await response.json();
        setEpisodes(data.name);
      } catch (error) {
        console.log(error);
      }
    };
    getEpisodes();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: image }}
          width={150}
          height={150}
          style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
        />
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <StyledText
          width={200}
          text={name}
          fontSize={19}
          fontFamily={"monospace"}
          color="white"
          fontWeight={"bold"}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="ellipse" size={12} color={clr} />
          <StyledText
            text={status + " - " + species}
            fontSize={11}
            fontFamily={"Roboto"}
            color="white"
          />
        </View>
        <View style={styles.pad}>
          <StyledText
            text={"Last known location:"}
            fontSize={10}
            fontFamily={"Roboto"}
            color="#95887c"
          />
          <StyledText
            text={location.name}
            fontSize={15}
            fontFamily={"Roboto"}
            color="white"
            width={200}
          />
        </View>
        <View style={styles.pad}>
          <StyledText
            text={"First seen in:"}
            fontSize={10}
            fontFamily={"Roboto"}
            color="#95887c"
          />
          <StyledText
            text={episodes}
            fontSize={15}
            fontFamily={"Roboto"}
            color="white"
            width={200}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3c3e44",
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  pad: {
    paddingTop: 8,
  },
});

export default Character;
