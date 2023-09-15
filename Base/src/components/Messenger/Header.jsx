import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StyledImage } from "../StyledImage";
import { avatar } from "../../../assets";
import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "../StyledText";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={styles.imagen}>
          <StyledImage img={avatar} height={50} width={50} />
        </View>
        <StyledText
          text="Hey Alireza"
          fontSize={20}
          fontWeight="bold"
          margin={10}
        />
        <View style={{marginTop: 15}}>
        <Ionicons name="hand-left" size={24} color="black" />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, gap: 10}}>
        <Ionicons name="search" size={25} color="black" />
        <Ionicons name="grid-outline" size={25} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  imagen: {
    borderRadius: 50,
  },
});
