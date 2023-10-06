import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../../hooks/useAppContext";
import { StyledImage } from "../StyledImage";
import { StyledText } from "../StyledText";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

const Box = ({ name, subName, icon, img, price }) => {
  const { theme } = useAppContext();
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {img ? (
          <StyledImage img={img} width={50} height={50} />
        ) : (
          <View
            style={{
              backgroundColor: theme.backgroundColorCustom,
              width: 50,
              height: 50,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={theme.buttonColor}
            />
          </View>
        )}
        <View>
          <StyledText
            text={name}
            fontSize={20}
            fontWeight={"bold"}
            color={img ? theme.textColor : theme.textColorButton}
          />
          <StyledText
            text={subName}
            fontSize={15}
            color={img ? theme.textMinusColor : theme.textBoxMinusColor}
          />
        </View>
        {price ? (
          <View style={{ marginLeft: "auto" }}>
            <StyledText
              text={price}
              fontSize={20}
              fontWeight={"bold"}
              color={theme.textColorButton}
            />
          </View>
        ) : (
          <SimpleLineIcons
            style={{ marginLeft: "auto" }}
            name="options-vertical"
            size={20}
            color={theme.iconColor}
          />
        )}
      </View>
    </View>
  );
};

export default Box;
