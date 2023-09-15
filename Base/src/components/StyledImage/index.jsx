import { Image } from "react-native";

export const StyledImage = ({
img,
height,
  width,
}) => {
  return (
    <Image source={img} style={{height,width}}/>
  );
};