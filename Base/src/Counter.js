import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementValue = () => dispatch(increment());
  const decrementValue = () => dispatch(decrement());
  const incrementByAmountValue = () =>
    dispatch(incrementByAmount({ action: 10 }));
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>
        Counter value:{count || "Loading..."}
      </Text>
      <TouchableOpacity onPress={incrementValue}>
        <Text style={{ fontSize: 30 }}> Increment by one</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrementValue}>
        <Text style={{ fontSize: 30 }}> Decrement by one</Text>
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
