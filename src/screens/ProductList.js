import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { themeColor } from "../assets/CustomColors";
import { getAllProducts } from "../store/client/products";
import AppContainer from "../components/AppContainer";
import {useDispatch} from 'react-redux';
import { addItemToCart } from "../store/slices/cartSlice";
import { useToast } from "react-native-toast-notifications";
const ProductList = (props) => {

  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getAllProducts().then(res => setData(res))
  },[]);

  const onPressDetail = (item) => {
    props.navigation.navigate('ProductDetail', {data: item})
  }

  const renderItem = ({ item }) => {
    return <TouchableOpacity onPress={() =>onPressDetail(item)} style={styles.itemContainer}>
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
  }

  const AddToCart = (item) => {
    dispatch(addItemToCart(item))
    props.navigation.navigate("Cart")
    toast.show(item.title +   " added to cart", {
      type:"success",
      placement: "center",
      duration:1200
    })  }

  return (
    <AppContainer>
      <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} horizontal={false} numColumns={2}/>
    </AppContainer>
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
