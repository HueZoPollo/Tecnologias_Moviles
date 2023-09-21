import { Alert, Modal, StyleSheet, View } from "react-native";
import { StyledText } from "../StyledText";
import { StyledTouchable } from "../StyledTouchable";
import { Ionicons } from "@expo/vector-icons";
import { StyledTouchableIcon } from "../StyledTouchableIcon";

const StyledModal = ({ modalVisible, setModalVisible, currentTask }) => {
  if (currentTask.isCompleted === true) {
    currentTask.isCompleted = "Completed";
  } else {
    currentTask.isCompleted = "Not completed";
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("El modal se ha cerrado.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf: 'flex-end'}}>
              <StyledTouchableIcon 
                borderRadius={10}
                width={40}
                height={30}
                icon={"close-circle-outline"}
                color={"#fff"}
                size={30}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
            <StyledText
              text={currentTask.task}
              fontSize={40}
              color={"#fff"}
              fontWeight={"bold"}
              textAlign={"center"}
            />
            <StyledText
              text={"Created at: " + currentTask.createdDate}
              fontSize={20}
              color={"#DBD6D6"}
              textAlign={"center"}
            />
            <StyledText
              text={"Updated at: " + currentTask.updateDate}
              fontSize={20}
              color={"#DBD6D6"}
              textAlign={"center"}
            />
            <StyledText
              text={"Status: " + currentTask.isCompleted}
              fontSize={20}
              color={"#DBD6D6"}
              textAlign={"center"}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#9E3091",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#red",
    elevation: 5,
    gap: 10,
  },
});

export default StyledModal;
