import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { StyledText } from "../Text";

export const StyledTouchable = ({ backgroundColor, padding, borderRadius, borderColor, borderWidth, width, height, text, fontSize, color, textAlign, fontWeight }) => {

    return (
        <TouchableOpacity style={{ backgroundColor, padding, borderRadius, borderColor, borderWidth, width, height }}>
            <StyledText text={text} fontSize={fontSize} color={color} textAlign={textAlign} fontWeight={fontWeight} />
        </TouchableOpacity>
    );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});