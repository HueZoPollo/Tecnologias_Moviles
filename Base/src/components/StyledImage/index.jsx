import { Image } from "react-native";

export const StyledImage = ({ img, width, height }) => {
  return <Image source={img} style={{ width, height }} />;
};
