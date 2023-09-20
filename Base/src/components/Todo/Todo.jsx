import { View, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
import { StyledTouchable } from "../StyledTouchable";
const Todo = ({
  id,
  task,
  isCompleted,
  handleDelete,
  handleComplete,
  createdDate,
  updateDate,
  handleEditing,
}) => {
  const height = task.length > 20 ? "auto" : 50;
  const textComp = isCompleted === false ? "✅" : "❌";
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
        <View style={{ flexDirection: "row", gap: 8 }}>
          <StyledTouchable
            borderWidth={0.5}
            borderColor={"white"}
            borderRadius={10}
            width={60}
            height={30}
            text={"🗑"}
            fontSize={18}
            textAlign={"center"}
            onPress={() => handleDelete(id)}
          />
          <StyledTouchable
            borderWidth={0.5}
            borderColor={"white"}
            borderRadius={10}
            width={60}
            height={30}
            text={"📝"}
            fontSize={18}
            textAlign={"center"}
            onPress={() => handleEditing(id)}
          />
          <StyledTouchable
            borderWidth={0.5}
            borderColor={"white"}
            borderRadius={10}
            width={60}
            height={30}
            text={textComp}
            fontSize={18}
            textAlign={"center"}
            onPress={() => handleComplete(id)}
          />
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
