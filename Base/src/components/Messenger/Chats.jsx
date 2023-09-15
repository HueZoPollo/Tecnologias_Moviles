import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StyledImage } from "../StyledImage";
import { avatar } from "../../../assets";
import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "../StyledText";
import { Storie } from "../Storie";

const DATA = [
  { id: 1, name: "Alireza", img: avatar, message: 'Hola mundo' },

];

export default function Chats() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item: { name, img, message }, index }) => (
          <Storie img={img} height={50} width={50} name={name}/>
        )}
        keyExtractor={({id}) => id}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 20 }} />}
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
