import { TouchableOpacity } from "react-native";
import { StyledText } from "../StyledText";
import { useState } from "react";
 
export const StyledTouchable = ({ backgroundColor, padding, margin, borderRadius, borderColor, borderWidth }) => {
    const [texto, setTexto] = useState('Aprietame')

    const press = () => {
        if (texto == 'Aprietame') {
            setTexto('Gracias!')
            setTimeout(() => {
                setTexto('Aprietame')
            }, 500);
        }
        else {
            setTexto('Aprietame')
        }
    }

    return (
        <TouchableOpacity style={{ backgroundColor, padding, margin, borderRadius, borderColor, borderWidth, }} onPress={()=>press()}>
            <StyledText text={texto} fontSize={20} fontWeight={'bold'} fontFamily={'serif'} color={'blue'}/>
        </TouchableOpacity>
    );
    }