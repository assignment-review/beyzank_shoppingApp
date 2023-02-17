import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../store/client/auth";
import React from "react";
import AppContainer from "../components/AppContainer";
import { themeColor } from "../assets/CustomColors";

const ProductDetail = (props) => {

  const data = props.route.params?.data;

  const onPress = () => {
    logout()
  }

  return (
    <AppContainer>
      <Image style={styles.image} source={{uri: data?.image}} resizeMode="contain" />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>

      <View style={styles.bottom}>
        <Text style={styles.title}>{data.price} TL</Text>

        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </AppContainer>
  );
};

const styles = {
  category:{
    textAlign:"center"
  },
  image: {
    width: "85%",
    height: 300,
    alignSelf: "center",
    borderColor: themeColor,
    borderWidth:2,
    borderRadius:4,
    marginVertical: 30,
  },
  title:{
    color: themeColor,
    fontSize:18,
    fontWeight: "bold",
    marginHorizontal: 20
  },
  desc:{
    color: "#414141",
    marginVertical: 20,
    marginHorizontal: 20
  },
  bottom: {
    width: Dimensions.get("window").width,
    height: 80,
    borderWidth:1,
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

export default ProductDetail;
