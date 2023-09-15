import { Image, View } from "react-native";
import { StyledText } from "../StyledText";

export const Message = ({
  img,
    height,
    width,
    name,
    message,
}) => {
  return (
    <View style={{borderRadius: 50}}>
        <Image source={img} style={{height, width}}/>
        <StyledText text="Alireza" fontSize={10} fontWeight="bold" margin={10} />
    </View>
  );
};