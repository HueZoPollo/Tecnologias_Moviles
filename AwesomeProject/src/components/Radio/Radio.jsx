import { View, Text, Image } from "react-native";
import { StyledText } from "../StyledText";
import { Ionicons } from '@expo/vector-icons';
import { StyledImage } from "../StyledImage";
import { money } from "../../../assets";

const Radio = ({ name, hashtag, price, image }) => {
  return (
    <View style={{borderRadius: 10, backgroundColor: '#FFF', width: 200, height: 350, justifyContent: 'center'}} >
        <StyledImage img={image} width={200} height={200} />
        <View style={{marginTop: 10, marginLeft: 30}}>
            <StyledText text={hashtag} fontSize={15} color={'#A5A5A5'} />
            <StyledText text={name} fontSize={15} fontWeight={'bold'} />
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="logo-bitcoin" size={15} color="#FFC700" />
                <StyledText text={price} fontSize={12} fontWeight={'bold'} />
            </View>
        </View>
    </View>
  )
}

export default Radio