import { Text, TouchableOpacity } from "react-native";
import { themeColor } from "../assets/CustomColors";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  button: {
    borderColor: themeColor,
    backgroundColor: themeColor,
    borderRadius: 20,
    borderWidth: 1,
    height: 50,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize:18,
    fontWeight: "bold"
  }
}

export default CustomButton;
