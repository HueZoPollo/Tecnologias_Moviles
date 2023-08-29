import { Text, View, StyleSheet } from "react-native";
import { StyledText } from "../StyledComponents/Text";

export default function LoginHeader() {
    return (
      <View style={styles.container}>
        <StyledText text={'Sign in to your Account'} fontSize={35} fontWeight={600} color={'white'}/>
        <StyledText text={'Sign in to your Account'} fontSize={10} fontWeight={400} color={'white'}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: .25,
      backgroundColor: "#00004d",
      padding: 20,
      justifyContent: "flex-end",
      // alignItems: "center",
    },
  });