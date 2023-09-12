import { View, FlatList } from 'react-native';
import { StyledText } from '../StyledText';
import { red, white, green } from '../../../assets';
import Radio from '../Radio/Radio';

const DATA = [
    { id: 1, name: 'Divoom Radio', hashtag: '#Portable FM', price: '52.00', image: red },
    { id: 2, name: 'Divoom Radio', hashtag: '#Smallest FM', price: '42.00', image: white },
    { id: 3, name: 'Divoom Radio', hashtag: '#Biggest FM', price: '82.40', image: green },
]

export default function Body() {
    return (
      <View style={{marginTop: 30}}>
        <StyledText text="Popular Product" fontSize={25} fontWeight={'bold'}  />
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item: {name, hashtag, price, image}, index }) =>
                    <Radio name={name} hashtag={hashtag} price={price} image={image} />
                }
                ItemSeparatorComponent={() => <View style={{marginTop: 10}} />}
                horizontal={true}
                style={{marginTop: 20}}
                contentContainerStyle={{gap: 20}}
                keyExtractor={({ id }) => id}
            />
        </View>
      </View>
    );
  }