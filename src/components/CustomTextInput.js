import { TextInput } from "react-native";
import { themeColor } from "../assets/CustomColors";

const CustomTextInput = (props) => {
  return (
    <TextInput
    onChangeText={props.onChangeText}
    value={props.value}
    style={styles.input}
    secureTextEntry={props.secureTextEntry ? true : false}
    />
  );
};

const styles = {
  input: {
    width: "90%",
    borderColor: themeColor,
    borderRadius: 20,
    borderWidth: 1,
    height: 50,
    alignSelf: "center",
    marginVertical: 20,
    paddingHorizontal:10,
    fontSize:16,
    color: "#414141"
  }
}

export default CustomTextInput;
