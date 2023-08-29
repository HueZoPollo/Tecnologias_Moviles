import { Text, View , StyleSheet} from "react-native";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContent from "../components/Login/LoginContent";

export default function Login() {
    return (
      <View style={styles.container}>
        <LoginHeader />
        <LoginContent />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "blue",
    },
  });