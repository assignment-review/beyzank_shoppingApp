import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import { themeColor } from "../assets/CustomColors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { addItemToCart, decreaseItem, removeItemFromCart } from "../store/slices/cartSlice";
import ConfirmCartModal from "../components/modals/ConfirmCartModal";
import PriceBottom from "../components/PriceBottom";
import EmptyCart from "../components/EmptyCart";
import { saveMyOrder } from "../store/client/products.service";

const Cart = () => {
  const {cartItems} = useSelector(state => state.cart)
  const {total} = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const remove = (item) => {
    dispatch(removeItemFromCart(item.item.id))
  }

  const increase = (item) => {
    dispatch(addItemToCart(item))
  }

  const decrease = (item) => {
    if(item.quantity === 1)
      dispatch(removeItemFromCart(item.item.id))
    else
      dispatch(decreaseItem(item.item.id))
  }

  const confirmCart = () => {
    saveMyOrder(cartItems, user)
    setModalVisible(true)
  }

  if(cartItems.length===0)
    return <EmptyCart/>

  return (
    <AppContainer>
      <ScrollView style={styles.container}>
        {cartItems.map(item => {
          console.log(item);
          return <View style={styles.itemContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{
                uri: item.item.image,
              }}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.item.title}</Text>
              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.price}>{item.item.price} TL</Text>
                </View>
                <View style={styles.countContainer}>
                  <TouchableOpacity style={styles.buttons} onPress={() => decrease(item)}>
                    <Text style={styles.buttonsText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.buttons} onPress={() => increase(item)}>
                    <Text style={styles.buttonsText}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => remove(item)}>
                  <MaterialCommunityIcons name="delete" size={20} color={themeColor} style={{marginRight: 10}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        })}
      </ScrollView>
      <PriceBottom price={total} onPress={confirmCart} text="Confirm Cart"/>

      {modalVisible && <ConfirmCartModal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
    </AppContainer>
  );
};

const styles = {
  container:{
    marginBottom: 100
  },
  itemContainer: {
    flexDirection:"row",
    marginHorizontal:10,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:30
  },
  titleContainer: {
    width: "70%",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title:{
    color: "#3b3b3b",
    marginBottom: 20
  },
  price:{
    color: themeColor,
  },
  image: {
    width: "25%",
    height: 90,
    marginRight: 15
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: themeColor,
    borderWidth: 1,
    borderRadius: 20,
  },
  quantity:{
    color: themeColor,
    fontSize: 16,
    marginHorizontal: 15
  },
  buttons:{
    backgroundColor: "#d1d6e7",
    fontSize:18,
     paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius: 20
  },
  buttonsText:{
    color: themeColor
  },
  totalContainer: {
    width: Dimensions.get("window").width,
    height: 60,
    borderWidth:1,
    borderBottomWidth:0,
    borderColor: "#aeaeae",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff"
  },
  total: {
    marginRight: 30,
    color: themeColor,
    fontSize:19,
    fontWeight: "bold"
  },
  confirmButton:{
    zIndex:9,
    backgroundColor: themeColor,
    height:40,
    borderRadius:15,
    alignItems: "center",
    justifyContent:"center",
    width: "40%"
  },
  confirmText: {
    color:"#fff",
    fontWeight: "bold"
  }
}

export default Cart;
