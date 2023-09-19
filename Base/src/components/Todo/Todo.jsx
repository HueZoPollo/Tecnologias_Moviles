import { View, StyleSheet } from 'react-native'
import { StyledText } from '../StyledText'
import { StyledTouchable } from '../StyledTouchable'
const Todo = ({ task, isCompleted }) => {
  return (
    <View style={styles.container}>
        <StyledText text={task} fontSize={20} color={'#000'} fontWeight={'bold'} />
        <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 10 }}>
            <StyledTouchable borderWidth={1} borderColor={'white'} borderRadius={10} width={75} height={25} text={'Delete'} fontSize={15} color={'#000'} textAlign={'center'} />
            <StyledTouchable borderWidth={1} borderColor={'white'} borderRadius={10} width={75} height={25} text={'Edit'} fontSize={15} color={'#000'} textAlign={'center'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    width: 350,
    backgroundColor: '#67B171',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
  },
})

export default Todo