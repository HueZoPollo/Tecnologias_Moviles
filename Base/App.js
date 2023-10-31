import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { useMemo, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // const multiplyConter = () => {
  //   console.log("Counter");
  //   setCounter(counter * 2);
  //   return counter * 2;
  // };

  const multiplyConter = useMemo(() => {
    console.log("Counter");
    return counter * 2;
  }, [counter]);

  const sayHello = () => {
    console.log("Hello");
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 80 }}>{counter}</Text> */}
      <TouchableOpacity>
        <Text style={{ fontSize: 80 }}>Multiply counter: {multiplyConter}</Text>
        <Text style={{ fontSize: 80 }}>SAY HELLO: {sayHello}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ borderWidth: 1, borderRadius: 10, padding: 5 }}
        onPress={() => {
          setCounter(counter + 1);
        }}
      >
        <Text style={{ fontSize: 40 }}>Increment by one</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ borderWidth: 1, borderRadius: 10, padding: 5 }}
        onPress={() => {
          setCounter2(counter2 + 1);
        }}
      >
        <Text style={{ fontSize: 40 }}>Increment New Counter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
