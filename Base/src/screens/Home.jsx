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
import { FlatList } from "react-native-gesture-handler";
import Character from "../components/Characters/Character";

const Home = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [characters, setCharacters] = useState([]);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apisimpsons.fly.dev/api/personajes"
        );
        const json = await response.json();
        // console.log(json.docs);
        setCharacters(json.docs);
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
    <View
      style={{
        backgroundColor: "#ffd521",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isFetching ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <StyledText text={"Cargando..."} fontSize={30} fontWeight={"bold"} />
        </View>
      ) : (
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={characters}
            renderItem={({
              item: { Nombre, Imagen, Genero, Estado, Ocupacion },
            }) => {
              return (
                <Character
                  nombre={Nombre}
                  imagen={Imagen}
                  genero={Genero}
                  estado={Estado}
                  ocupacion={Ocupacion}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={{ padding: 15 }} />}
          />
        </View>
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
