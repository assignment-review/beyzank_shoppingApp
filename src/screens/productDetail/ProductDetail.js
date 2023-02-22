import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import AppContainer from "../../components/AppContainer";
import { themeColor } from "../../assets/CustomColors";
import PriceBottom from "../../components/PriceBottom";
import { addItemToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import Comments from "./components/Comments";

const ProductDetail = (props) => {

  const data = props.route.params?.data;
  const dispatch = useDispatch();
  const toast = useToast();

  const onPressAddButton = (item) => {

    dispatch(addItemToCart(item))
    props.navigation.navigate("Cart")
    toast.show(item.title +   " added to cart", {
      type:"success",
      placement: "center",
      duration:1200
    })
  }

  return (
    <AppContainer>
      <ScrollView>
        <Image style={styles.image} source={{uri: data?.image}} resizeMode="contain" />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <View>
          <Comments data={data}/>
        </View>
      </ScrollView>
      <PriceBottom price={data.price} onPress={() => onPressAddButton(data)} text="Add to Cart"/>
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
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30
  },
}

export default ProductDetail;
