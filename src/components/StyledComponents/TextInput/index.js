import { TextInput, StyleSheet} from 'react-native';

export const StyledInput = ({ width, placeholder, borderRadius, borderWidth, borderColor, paddingHorizontal, height, pass }) => {
    return (
        <TextInput placeholder={placeholder} style={{ width, borderRadius, borderWidth, borderColor, paddingHorizontal, height }} secureTextEntry={pass}></TextInput>
    );
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});