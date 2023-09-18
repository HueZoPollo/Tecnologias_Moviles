import { View } from "react-native";
import { StyledText } from "../StyledText";
import { StyledImage } from "../StyledImage";
import { Ionicons } from "@expo/vector-icons";

const Therapist = ({ name, img, rating, favorite, role }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 25,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <StyledImage img={img} width={50} height={50} />
      <View style={{ flexDirection: "column", gap: 5 }}>
        <StyledText
          text={name}
          color={"#000"}
          fontSize={20}
          fontWeight={"bold"}
        />
        <StyledText text={role} color={"#C0BFC3"} fontSize={15} />
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <StyledText
          text={rating}
          color={"#000"}
          fontSize={14}
          fontWeight={"bold"}
        />
        {favorite ? (
          <Ionicons name="star" size={20} color="#3562D7" />
        ) : (
          <Ionicons name="star-outline" size={20} color="#3562D7" />
        )}
      </View>
    </View>
  );
};

export default Therapist;
