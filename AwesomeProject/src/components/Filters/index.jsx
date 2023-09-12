import { View } from "react-native";
import { StyledText } from "../StyledText";
import { Ionicons } from '@expo/vector-icons';

export const Filters = ({text, icon, width}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', gap: 5, backgroundColor: '#FFF', width, borderRadius: 10, height: 40, padding:5}}>
            <StyledText text={text} fontSize={10} fontWeight={100} />
            <Ionicons name={icon} size={15} color="#011111" />
        </View>
    );
  };