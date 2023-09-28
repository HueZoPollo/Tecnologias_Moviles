import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
  Switch,
  ActivityIndicator,
} from "react-native";
import Header from "../components/CustomHeader/Header";
import { useState } from "react";
import { StyledText } from "../components/StyledText";

const Home = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/?page=2"
        );
        const json = await response.json();
        await delay(5000);
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, []);
  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{
          alignSelf: "center",
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
      />
      {isEnabled && (
        <StyledText text={"Home"} fontSize={20} textAlign={"center"} />
      )}
      {isFetching ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text>Ya cargo</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
