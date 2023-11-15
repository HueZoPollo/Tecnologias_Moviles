import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./src/store";
import Counter from "./src/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
