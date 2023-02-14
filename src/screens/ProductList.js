import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { themeColor } from "../assets/CustomColors";
import { getAllProducts } from "../store/client/products";

const ProductList = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    getAllProducts().then(res => setData(res))
  },[]);

  const onPressDetail = () => {
    props.navigation.navigate('ProductDetail')
  }

  const renderItem = ({ item }) => {
    return <TouchableOpacity onPress={onPressDetail} style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: item.image}} resizeMode="contain" />
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.itemPrice}>{item.price} ₺</Text>
        <TouchableOpacity onPress={AddToBasket} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Basket</Text>
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  }

  const AddToBasket = () => {
    console.log("eklendi.");
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal={false} numColumns={2}/>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width:"44%",
    margin:"3%",
    borderRadius:6,
    padding:10,
    borderWidth: 0.2,
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
    color: "#468189",
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

export default ProductList;
