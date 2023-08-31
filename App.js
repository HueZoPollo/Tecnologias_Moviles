import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Login from "./src/screens/Login";
import Person from "./src/components/Person/Person";


const DATA = [
  { id: "1", name: "Eder", lastName: "Rivera" },
  { id: "2", name: "Pablo", lastName: "Juarez" },
  { id: "3", name: "Ulises", lastName: "Rojas" },
  { id: "4", name: "Arturo", lastName: "Martinez" },
  { id: "6", name: "Diego", lastName: "Ruiz" },
  { id: "7", name: "Diego", lastName: "Ruiz" },
  { id: "8", name: "Diego", lastName: "Ruiz" },
  { id: "9", name: "Diego", lastName: "Ruiz" },
  { id: "10", name: "Diego", lastName: "Ruiz" },
  { id: "11", name: "Diego", lastName: "Ruiz" },
  { id: "12", name: "Diego", lastName: "Ruiz" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item: { name, lastName }, index }) => 
          <Person name={name} lastName={lastName} index={index} />
        }
        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
        keyExtractor={({id}) => id}
      />
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#fff'
  },
});
