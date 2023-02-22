import { ActivityIndicator, FlatList, View } from "react-native";
import React, { useEffect } from "react";
import AppContainer from "../../components/AppContainer";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/slices/cartSlice";
import { useToast } from "react-native-toast-notifications";
import { fetchAllProducts } from "../../store/slices/productSlice";
import ProductItem from "./components/ProductItem";
const ProductList = (props) => {

  const dispatch = useDispatch();
  const {products, loading} = useSelector(state => state.product)
  const toast = useToast();

  useEffect(() => {
    dispatch(fetchAllProducts());
  },[]);


  const renderItem = ({ item }) => {
    return <ProductItem item={item} AddToCart={AddToCart}/>
  }

  const AddToCart = (item) => {
    dispatch(addItemToCart(item))
    props.navigation.navigate("Cart")
    toast.show(item.title +   " added to cart", {
      type:"success",
      placement: "center",
      duration:1200
    })
  }

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

export default ProductList;
