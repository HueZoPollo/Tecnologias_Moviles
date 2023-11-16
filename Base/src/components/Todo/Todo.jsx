import { View, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
import { StyledTouchableIcon } from "../StyledTouchableIcon";
const Todo = ({
  id,
  task,
  isCompleted,
  handleDelete,
  handleComplete,
  createdDate,
  updateDate,
  handleEditing,
  // modalVisible,
  // setModalVisible,
  // setCurrentTask,
}) => {
  // const { modalVisible, setModalVisible } = useTasks();
  const height = task.length > 20 ? "auto" : 50;
  const textComp = isCompleted === false ? "checkmark" : "close";
  return (
    <View
      style={[
        styles.container,
        isCompleted && styles.taskCompleted,
        { height },
      ]}
    >
      <View>
        <StyledText
          text={task}
          fontSize={20}
          color={"#fff"}
          fontWeight={"bold"}
          width={120}
        />
        <StyledText
          text={"Created at: " + createdDate}
          fontSize={8}
          color={"#E2E2E2"}
        />
      </View>
      <View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <StyledTouchableIcon
            borderRadius={10}
            borderColor={"#fff"}
            borderWidth={1}
            width={40}
            height={30}
            icon={"trash"}
            color={"#fff"}
            size={20}
            onPress={() => handleDelete(id)}
          />
          <StyledTouchableIcon
            borderRadius={10}
            borderColor={"#fff"}
            borderWidth={1}
            width={40}
            height={30}
            icon={"create"}
            color={"#fff"}
            size={20}
            onPress={() => handleEditing(id)}
          />
          <StyledTouchableIcon
            borderRadius={10}
            borderColor={"#fff"}
            borderWidth={1}
            width={40}
            height={30}
            icon={textComp}
            color={"#fff"}
            size={20}
            onPress={() => handleComplete(id)}
          />
          {/* <StyledTouchableIcon
            borderRadius={10}
            borderColor={"#fff"}
            borderWidth={1}
            width={40}
            height={30}
            icon={"eye-outline"}
            color={"#fff"}
            size={20}
            onPress={() => {
              setModalVisible(!modalVisible);
              setCurrentTask({
                id,
                task,
                isCompleted,
                createdDate,
                updateDate,
              });
            }}
          /> */}
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <StyledText
            text={"Updated at: " + updateDate}
            fontSize={8}
            color={"#E2E2E2"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    width: 350,
    backgroundColor: "#382952",
    borderRadius: 10,
    borderWidth: 1,
  },
  taskCompleted: {
    backgroundColor: "#000",
    borderColor: "#382952",
  },
});

export default Todo;
