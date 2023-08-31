import { View, Text } from "react-native";

const Person = ({ name, lastName, index }) => {
  return (
    <View
      style={{ borderWidth: 1, borderColor: index % 2 === 0 ? "red" : "blue" }}
    >
      <Text style={{ fontSize: 35, padding: 10 }}>
        {name} {lastName}
      </Text>
    </View>
  )
}

export default Person
