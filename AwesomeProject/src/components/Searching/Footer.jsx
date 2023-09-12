import { View } from 'react-native';
import { StyledIcon } from '../StyledIcon';

export default function Footer() {
    return (
      <View style={{marginTop: 30, gap:30, flexDirection:'row'}}>
            <StyledIcon icon="home-sharp" width={60} height={60} widthIcon={25} color={'#FFFFFF'} backgroundColor={'#000000'}/>
            <StyledIcon icon="pricetag-outline" width={60} height={60} widthIcon={25} color={'#B5B5B5'}/>
            <StyledIcon icon="notifications-outline" width={60} height={60} widthIcon={25} color={'#B5B5B5'}/>
            <StyledIcon icon="person-outline" width={60} height={60} widthIcon={25} color={'#B5B5B5'}/>
      </View>
    );
  }