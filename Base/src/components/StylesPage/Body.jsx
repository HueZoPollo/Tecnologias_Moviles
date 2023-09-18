import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { StyledText } from "../StyledText";
import { Ionicons } from "@expo/vector-icons";
import Symptomp from "../Symptomp/Symptomp";
import { Avatar, AvatarW } from "../../../assets";
import Therapist from "../Therapist/Therapist";

const SYMPTOMPS = [
  { id: 1, name: "I'm fine", icon: "😉" },
  { id: 2, name: "Fever", icon: "🤒" },
  { id: 3, name: "Sneezing", icon: "🤧" },
  { id: 4, name: "Cough", icon: "🤧" },
];

const THERAPISTS = [
  {
    id: 1,
    name: "Dr. Stella Kane",
    role: "therapist",
    img: AvatarW,
    rating: 4.8,
    favorite: true,
  },
  {
    id: 2,
    name: "Dr. Stella Kane",
    role: "physiotherapist",
    img: Avatar,
    rating: 5.0,
    favorite: false,
  },
  {
    id: 3,
    name: "Dr. Stella Kane",
    role: "physiotherapist",
    img: AvatarW,
    rating: 4.8,
    favorite: true,
  },
];
export default function Body() {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <StyledText
          text="Hello,"
          color={"#C0BFC3"}
          fontSize={35}
          fontWeight={"bold"}
        />
        <StyledText
          text=" Chris"
          color={"#000"}
          fontSize={35}
          fontWeight={"bold"}
        />
        <StyledText
          text={" 👋"}
          color={"#C0BFC3"}
          fontSize={30}
          fontWeight={"bold"}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20, gap: 22 }}>
        <View
          style={[
            styles.container,
            { backgroundColor: "#3562D7", padding: 20 },
          ]}
        >
          <View style={[styles.icon, { backgroundColor: "white" }]}>
            <Ionicons name="barbell-outline" size={30} color="#3562D7" />
          </View>
          <StyledText
            text="Start Training"
            color={"#fff"}
            fontSize={18}
            fontWeight={"bold"}
          />
        </View>
        <View
          style={[
            styles.container,
            { backgroundColor: "#E6EBFC", padding: 20 },
          ]}
        >
          <View style={[styles.icon, { backgroundColor: "#3562D7" }]}>
            <Ionicons name="list-circle-outline" size={30} color="#fff" />
          </View>
          <View>
            <StyledText
              text="Your treatmeant plan"
              color={"#000"}
              fontSize={18}
              fontWeight={"bold"}
            />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <StyledText
          text="What are your symptomps?"
          color={"#000"}
          fontSize={22}
          fontWeight={"bold"}
        />
        <FlatList
          data={SYMPTOMPS}
          renderItem={({ item: { name, icon }, index }) => (
            <Symptomp name={name} icon={icon} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          horizontal
          style={{ marginTop: 30 }}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={({ id }) => id}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <StyledText
            text="Popular therapists"
            color={"#000"}
            fontSize={22}
            fontWeight={"bold"}
          />
          <StyledText
            text="See all"
            color={"#C0BFC3"}
            fontSize={17}
            fontWeight={"bold"}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={THERAPISTS}
            renderItem={({
              item: { name, img, rating, favorite, role },
              index,
            }) => (
              <Therapist
                name={name}
                img={img}
                rating={rating}
                favorite={favorite}
                role={role}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
            style={{ marginTop: 20 }}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={({ id }) => id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    borderRadius: 20,
    width: 170,
    gap: 50,
  },
  icon: {
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
