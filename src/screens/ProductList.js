import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { themeColor } from "../assets/CustomColors";
import AppContainer from "../components/AppContainer";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";
import { useToast } from "react-native-toast-notifications";
import { fetchAllProducts } from "../store/slices/productSlice";
const ProductList = (props) => {

  const dispatch = useDispatch();
  const {products, loading} = useSelector(state => state.product)
  const toast = useToast();

  useEffect(() => {
    dispatch(fetchAllProducts());
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

  if(loading)
    return <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator/>
    </View>

  return (
    <AppContainer>
      <FlatList data={products} keyExtractor={item => item.id} renderItem={renderItem} horizontal={false} numColumns={2}/>
    </AppContainer>
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

export default ProductList;
