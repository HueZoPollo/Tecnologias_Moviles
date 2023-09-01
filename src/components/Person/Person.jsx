import { View, Text, Image, StyleSheet } from "react-native";

const Person = ({ name, lastName, index, img }) => {
  return (
    <View
      style={{
        borderRadius: 25,
        backgroundColor:
          index % 4 === 0
            ? "#ff1270"
            : index % 4 === 1
            ? "#0bddfa"
            : index % 4 === 2
            ? "#ac44dd"
            : "#f97",
        margin: 10,
        height: 200,
        width: 165,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{lastName}</Text>
      <Image source={img} style={{ width: 100, height: 103 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});

export default Person;
