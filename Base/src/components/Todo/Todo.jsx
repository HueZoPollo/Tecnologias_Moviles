import { View, StyleSheet } from 'react-native'
import { StyledText } from '../StyledText'
import { StyledTouchable } from '../StyledTouchable'
const Todo = ({ task, isCompleted }) => {
  const height = task.length > 20 ? 'auto' : 50
  return (
    <View style={[styles.container, {height}]}>
        <StyledText text={task} fontSize={20} color={'#fff'} fontWeight={'bold'} width={120} />
        <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 10 }}>
            <StyledTouchable borderWidth={.5} borderColor={'white'} borderRadius={10} width={75} height={30} text={'🗑'} fontSize={18} color={'#fff'} textAlign={'center'} />
            <StyledTouchable borderWidth={.5} borderColor={'white'} borderRadius={10} width={75} height={30} text={'📝'} fontSize={18} color={'#000'} textAlign={'center'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: 350,
    backgroundColor: '#382952',
    borderRadius: 10,
    borderWidth: 1,
  },
})

export default Todo