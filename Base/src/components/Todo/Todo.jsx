import { View, StyleSheet } from 'react-native'
import { StyledText } from '../StyledText'
import { StyledTouchable } from '../StyledTouchable'
const Todo = ({ id, task, isCompleted, handleDelete, handleComplete }) => {
  const height = task.length > 20 ? 'auto' : 50
  return (
    <View style={[styles.container, isCompleted && styles.taskCompleted, {height}]}>
        <StyledText text={task} fontSize={20} color={'#fff'} fontWeight={'bold'} width={120} />
        <View style={{ flexDirection: 'row', gap: 8, paddingHorizontal: 10 }}>
            <StyledTouchable borderWidth={.5} borderColor={'white'} borderRadius={10} width={60} height={30} text={'🗑'} fontSize={18} textAlign={'center'} onPress={() => handleDelete(id)} />
            <StyledTouchable borderWidth={.5} borderColor={'white'} borderRadius={10} width={60} height={30} text={'📝'} fontSize={18} textAlign={'center'}/>
            {isCompleted === true ? <StyledTouchable borderWidth={.5} borderColor={'white'} borderRadius={10} width={60} height={30} text={'❌'} fontSize={18} textAlign={'center'} onPress={() => handleComplete(id)} /> :
            <StyledTouchable borderWidth={.5} borderColor={'white'} borderRadius={10} width={60} height={30} text={'✅'} fontSize={18} textAlign={'center'} onPress={() => handleComplete(id)}/>}
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
  taskCompleted: {
    backgroundColor: '#000',
    borderColor: '#382952',
  },
})

export default Todo