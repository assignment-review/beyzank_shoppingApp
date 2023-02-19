import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColor } from "../assets/CustomColors";

const PriceBottom = (props) => {

  return (
    <View style={styles.bottom}>
      <Text style={styles.title}>{props.price.toString().length > 5 ? props.price.toString().slice(0, 5) : props.price} TL</Text>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  title:{
    color: themeColor,
    fontSize:18,
    fontWeight: "bold",
    marginHorizontal: 20
  },
  bottom: {
    width: Dimensions.get("window").width,
    height: 80,
    borderWidth:1,
    backgroundColor: "#fff",
    borderBottomWidth:0,
    borderColor: "#aeaeae",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button: {
    borderColor: themeColor,
    backgroundColor: themeColor,
    borderRadius: 20,
    borderWidth: 1,
    height: 50,
    width: "40%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize:16,
    fontWeight: "bold"
  }
}
export default PriceBottom;
