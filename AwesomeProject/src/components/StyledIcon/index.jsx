import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export const StyledIcon = ({icon, width, height, widthIcon, color, backgroundColor}) => {
    return (
        <View style={{ width, height, backgroundColor, justifyContent:'center', alignItems:'center', borderRadius: 10}}>
            <Ionicons name={icon} size={widthIcon} color={color} />
        </View>
    );
  };