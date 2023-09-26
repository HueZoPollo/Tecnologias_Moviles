import { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, ScrollView } from "react-native";
import Character from "../components/Characters/Character";

const Characters = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#1f1f1f" }}>
      <FlatList
        data={characters}
        renderItem={({
          item: { id, name, status, species, location, image, episode },
          index,
        }) => {
          return (
            <View>
              <Character
                name={name}
                status={status}
                species={species}
                location={location}
                image={image}
                episode={episode}
                navigation={navigation}
                id={id}
              />
            </View>
          );
        }}
        style={{ height: "100%" }}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => {
          return <View style={{ paddingTop: 20 }}></View>;
        }}
      />
    </View>
  );
};

export default Characters;
