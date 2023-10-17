import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuthContext } from "../hooks/useAuthContexts";
import { useNavigation } from "@react-navigation/native";
import { StyledText } from "../components/StyledText";
import { Food } from "../../assets";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin: onLogin } = useAuthContext();

  const handleLogin = async () => {
    try {
      const loginValue = await onLogin(username, password);
      if (loginValue) {
        navigation.navigate("StartNav", { screen: "Home" });
        setPassword("");
        setUsername("");
      } else {
        Alert.alert("Error", "Credenciales invalidas", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ gap: 10 }}>
      <Image
        source={Food}
        style={{
          width: "150%",
          height: 200,
          right: 87,
          borderBottomLeftRadius: 180,
          borderBottomRightRadius: 180,
        }}
      />
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <StyledText text={"Welcome!"} fontSize={35} fontWeight={"bold"} />
        <View style={{ marginTop: 20, gap: 5 }}>
          <StyledText text={"Email"} fontSize={15} fontWeight={"bold"} />
          <TextInput
            placeholder={"Enter your email"}
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#cdcdcd",
              paddingHorizontal: 10,
              height: 50,
            }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={{ marginTop: 20, gap: 5 }}>
          <StyledText text={"Password"} fontSize={15} fontWeight={"bold"} />
          <TextInput
            placeholder={"Enter your password"}
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#cdcdcd",
              paddingHorizontal: 10,
              height: 50,
            }}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View
          style={{ marginTop: 20, alignItems: "flex-end", marginBottom: 20 }}
        >
          <StyledText
            text={"Forgot your password?"}
            fontSize={15}
            fontWeight={"bold"}
            color={"#21b2b2"}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            borderRadius: 20,
            backgroundColor: "#21b2b2",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleLogin}
        >
          <StyledText
            text={"Login"}
            fontSize={15}
            textAlign={"center"}
            textAlignVertical={"center"}
            fontWeight={"bold"}
            color={"#fff"}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <StyledText text={"Don't have an account?"} fontSize={15} />
          <StyledText
            text={"Sign up"}
            fontSize={15}
            fontWeight={"bold"}
            color={"#21b2b2"}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
