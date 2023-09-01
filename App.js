import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import Login from "./src/screens/Login";
import Person from "./src/components/Person/Person";
import { facebook, google } from "./assets";

const DATA = [
  { id: "1", name: "Eder", lastName: "Rivera", image: facebook },
  { id: "2", name: "Pablo", lastName: "Juarez", image: google },
  { id: "3", name: "Ulises", lastName: "Rojas", image: facebook },
  { id: "4", name: "Arturo", lastName: "Martinez", image: google },
  { id: "6", name: "Diego", lastName: "Ruiz", image: facebook },
  { id: "7", name: "Alan", lastName: "Garcia", image: google },
  { id: "8", name: "Gregory", lastName: "House", image: facebook },
  { id: "9", name: "Barrita", lastName: "Licea", image: google },
  { id: "10", name: "Angel", lastName: "Gallegos", image: facebook },
  { id: "11", name: "Mario", lastName: "Gomez", image: google },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item: { name, lastName, image }, index }) => (
          <Person name={name} lastName={lastName} img={image} index={index} />
        )}
        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
        keyExtractor={({ id }) => id}
        style={{ padding: 10 }}
        contentContainerStyle={{ gap: 2 }}
        horizontal={false}
        numColumns={2}
      />
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
