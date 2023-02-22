import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColor } from "../../../assets/CustomColors";
import { useNavigation } from "@react-navigation/native";

const ProductItem = (props) => {

  const {item, AddToCart} = props;
  const navigation = useNavigation();

  const onPressDetail = (item) => {
    navigation.navigate('ProductDetail', {data: item})
  }

  return (
    <TouchableOpacity onPress={() =>onPressDetail(item)} style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: item.image}} resizeMode="contain" />
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.itemPrice}>{item.price} ₺</Text>
        <TouchableOpacity onPress={() =>AddToCart(item)} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Basket</Text>
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width:"44%",
    margin:"3%",
    alignItems: "center",
    borderRadius:6,
    padding:10,
    borderWidth: 0.6,
    borderColor: "#e0ecde",
  },
  image: {
    width:"100%",
    height:100,
    alignSelf: "center"
  },
  titleContainer: {
    marginBottom: 85
  },
  itemTitle: {
    fontSize: 14,
    color: "#676767",
    textAlign: "left",
    marginTop: 15,
  },
  bottom: {
    width: "100%",
    position:"absolute",
    bottom:10,
  },
  itemPrice: {
    fontSize: 18,
    textAlign: "right",
    color:themeColor,
    fontWeight: "bold",
    marginBottom:20
  },
  addButton: {
    borderRadius:20,
    borderColor: themeColor,
    borderWidth:1,
    width: "100%",
    height:35,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: themeColor,
  }
});


export default ProductItem;
