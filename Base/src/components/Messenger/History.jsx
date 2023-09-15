import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StyledImage } from "../StyledImage";
import { avatar } from "../../../assets";
import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "../StyledText";
import { Storie } from "../Storie";

const DATA = [
  { id: 1, name: "Alireza", img: avatar },
  { id: 2, name: "Alireza", img: avatar },
  { id: 3, name: "Alireza", img: avatar },
  { id: 4, name: "Alireza", img: avatar },
  { id: 5, name: "Alireza", img: avatar },
  { id: 6, name: "Alireza", img: avatar },
  { id: 7, name: "Alireza", img: avatar },
];

export default function History() {
  return (
    <View style={styles.container}>
      <StyledText text="Stories" fontSize={20} fontWeight="bold" margin={10} />
      <FlatList
        data={DATA}
        renderItem={({ item: { name, img }, index }) => (
          <Storie img={img} height={50} width={50} name={name}/>
        )}
        keyExtractor={({id}) => id}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 20 }} />}
        horizontal
      />
      <View style={{flexDirection: 'row', margin: 20, backgroundColor: '#ffffdd', justifyContent:'space-between'}}>
        <StyledText text="All" fontSize={20} fontWeight="bold" margin={10} backgroundColor={'white'} width={80} textAlign={'center'} borderRadius={30}/>
        <StyledText text="Group" fontSize={20} fontWeight="bold" margin={10} />
        <StyledText text="Chats" fontSize={20} fontWeight="bold" margin={10} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
