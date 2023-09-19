import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import Todo from "./src/components/Todo/Todo";
import { useState } from "react";
import { StyledTouchable } from "./src/components/StyledTouchable";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputValue === "") {
      return;
    }
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center", color:'white' }}>
          To do list
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            marginTop: 20,
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
              fontSize: 20,
              borderRadius: 5,
              width: 250,
              backgroundColor: "#382A53",
              color: "white",
            }}
            value={inputValue}
            placeholder="Enter your task"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setInputValue(text)}
          />
          <StyledTouchable
            onPress={handleAddTask}
            text={"➕"}
            width={60}
            height={40}
            backgroundColor={"#DBD6D6"}
            color={"white"}
            borderRadius={5}
            fontWeight={"bold"}
            textAlign={"center"}
            padding={5}
            fontSize={20}
          />
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item: { task, isCompleted } }) => (
          <Todo task={task} isCompleted={isCompleted} />
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" backgroundColor="#000" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: "#1E1530",
  },
});
