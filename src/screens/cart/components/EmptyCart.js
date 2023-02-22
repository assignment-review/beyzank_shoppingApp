import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import CustomButton from "../../../components/CustomButton";

const EmptyCart = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Entypo name="shopping-basket" color="green" size={100}/>
      <Text style={styles.text}>Your basket is empty. Start shopping now!</Text>
      <CustomButton text="START" onPress = {() => navigation.navigate("Home")}/>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100
  },
  text:{
    fontSize: 20,
    marginHorizontal: 90,
    lineHeight:45,
    textAlign: "center",
    color: "#525252"
  }
}

export default EmptyCart;
