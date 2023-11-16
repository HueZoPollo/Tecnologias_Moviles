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
import Todo from "./components/Todo/Todo";
import { StyledTouchableIcon } from "./components/StyledTouchableIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  completeTask,
  deleteTask,
  editComplete,
  editTask,
  setInputValue,
  cancelEdit,
} from "./features/counter/counterSlice";
import { handleShowError } from "./helpers/showError";

export default function List() {
  const todo = useSelector((state) => state.reducer.todo);
  const isEditing = useSelector((state) => state.reducer.isEditing);
  const inputValue = useSelector((state) => state.reducer.inputValue);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!isValid()) return;
    dispatch(addTask(inputValue));
  };
  const handleDeleteTask = (id) => dispatch(deleteTask(id));
  const handleCompleteTask = (id) => dispatch(completeTask(id));
  const handleEditTask = (id) => dispatch(editTask(id));
  const handleEditComplete = () => {
    if (!isValid()) return;
    dispatch(editComplete());
  };
  const handleSetInputValue = (text) => dispatch(setInputValue(text));

  const isValid = () => {
    if (!inputValue) return handleShowError("La tarea no puede estar vacía");
    else if (inputValue.length > 10)
      return handleShowError("La tarea no puede tener mas de 10 caracteres");

    const task = todo.find((task) => task.task === inputValue);
    if (task) {
      dispatch(cancelEdit());
      return handleShowError("La tarea ya existe");
    }

    return true;
  };

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
            onChangeText={(text) => handleSetInputValue(text)}
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
        data={todo}
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
          />
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
