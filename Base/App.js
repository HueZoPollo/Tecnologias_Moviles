import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import Todo from "./src/components/Todo/Todo";
import { useTasks } from "./src/hooks/useTasks";
import { StyledTouchableIcon } from "./src/components/StyledTouchableIcon";
import StyledModal from "./src/components/Modal/StyledModal";

export default function App() {
  const {
    inputValue,
    setInputValue,
    tasks,
    isEditing,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
    handleEditComplete,
    handleEditTask,
    modalVisible,
    setModalVisible,
    currentTask,
    setCurrentTask,
  } = useTasks();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
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
            placeholderTextColor={"gray"}
            onChangeText={(text) => setInputValue(text)}
          />
          <StyledTouchableIcon
            onPress={isEditing ? handleEditComplete : handleAddTask}
            icon={isEditing ? "checkmark" : "add"}
            width={60}
            height={40}
            size={25}
            color="white"
            borderWidth={1}
            borderColor={"#DBD6D6"}
            borderRadius={5}
          />
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item: { id, task, isCompleted, created, updated } }) => (
          <Todo
            task={task}
            isCompleted={isCompleted}
            id={id}
            handleDelete={handleDeleteTask}
            handleComplete={handleCompleteTask}
            createdDate={created}
            updateDate={updated}
            handleEditing={handleEditTask}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setCurrentTask={setCurrentTask}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <StyledModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        currentTask={currentTask}
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
