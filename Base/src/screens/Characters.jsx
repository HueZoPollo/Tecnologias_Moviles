import { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, ScrollView } from "react-native";
import Character from "../components/Characters/Character";
import { StyledText } from "../components/StyledText";

const Characters = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1f1f1f" }}>
      <StyledText
        text="Characters"
        fontSize={40}
        fontWeight="bold"
        textAlign={"center"}
        color={"#95887c"}
      />
      <ScrollView horizontal>
        <FlatList
          data={characters}
          renderItem={({
            item: { name, status, species, location, image, episode },
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
                />
              </View>
            );
          }}
          style={{ height: "100%" }}
          keyExtractor={({ id }) => id}
          ItemSeparatorComponent={() => {
            return <View style={{ paddingTop: 20 }}></View>;
          }}
          horizontal={false}
          numColumns={2}
          key={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Characters;
