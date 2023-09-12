import { View, Text, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
import { StyledImage } from "../StyledImage";
import { avatar } from "../../../assets";
import { Ionicons } from "@expo/vector-icons";
import { Filters } from "../Filters";

export default function Header() {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <StyledText text="Discover" fontSize={30} fontWeight={"bold"} />
          <StyledText text="your products" fontSize={22} />
        </View>
        <View style={styles.containerImg}>
          <StyledImage img={avatar} width={40} height={40} />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20, gap: 8 }}>
        <View style={styles.contSearch}>
          <Ionicons name="search" size={24} color="#011111" />
          <StyledText text="Divoom" fontSize={20} />
        </View>
        <View style={styles.contOption}>
          <Ionicons name="options-outline" size={30} color="#011111" />
        </View>
      </View>
      <View style={{ marginTop: 10, flexDirection: "row", gap: 8 }}>
        <Filters text="Miniso" icon="close-outline" width={70} />
        <Filters text="Neurso" icon="close-outline" width={70} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImg: {
    marginTop: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#D2C5C5",
    alignItems: "center",
    justifyContent: "center",
  },
  contSearch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    width: "80%",
  },
  contOption: {
    backgroundColor: "#F2B450",
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
