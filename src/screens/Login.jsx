import { Text, View } from "react-native";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContent from "../components/Login/LoginContent";

export default function Login() {
    return (
      <View>
        <LoginHeader />
        <LoginContent />
      </View>
    );
  }