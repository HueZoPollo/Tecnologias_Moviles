import { View } from "react-native";
import { StyledText } from "../StyledText";

const Symptomp = ({ name, icon }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#F6F6FB",
        width: 150,
        height: 40,
        justifyContent: "center",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
      }}
    >
      <StyledText
        text={icon}
        color={"#000"}
        fontSize={20}
        fontWeight={"bold"}
      />
      <StyledText
        text={name}
        color={"#000"}
        fontSize={20}
        fontWeight={"bold"}
      />
    </View>
  );
};

export default Symptomp;
