import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  });

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
      <Text style={{ fontSize: 50, textAlign: "center" }}>CHARACTERS</Text>
      <FlatList
        data={characters}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Characters;
