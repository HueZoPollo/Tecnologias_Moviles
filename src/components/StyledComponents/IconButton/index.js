import { Image, TouchableOpacity } from 'react-native';
// import { facebook, google } from '../../../../assets';
import { StyledText } from '../Text';

export const IconButton = ({ width, borderRadius, borderWidth, borderColor, height, name, flexDirection, text, fontSize, color, fontWeight, widthImage, heightImage, justifyContent, alignItems, gap }) => {
    return (
        <TouchableOpacity style={{ width, borderRadius, borderWidth, borderColor, height, flexDirection, justifyContent, alignItems, gap }}>
            <Image source={name} style={{ width: widthImage, height: heightImage }}></Image>
            <StyledText text={text} fontSize={fontSize} color={color} fontWeight={fontWeight} />
        </TouchableOpacity>
    );
  }