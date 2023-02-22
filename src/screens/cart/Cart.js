import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import AppContainer from "../../components/AppContainer";
import ConfirmCartModal from "../../components/modals/ConfirmCartModal";
import PriceBottom from "../../components/PriceBottom";
import EmptyCart from "./components/EmptyCart";
import { saveMyOrder } from "../../store/client/products.service";
import CartItem from "./components/CartItem";

const Cart = () => {
  const {cartItems} = useSelector(state => state.cart)
  const {total} = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)
  const [modalVisible, setModalVisible] = useState(false);

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
          return <CartItem item={item}/>
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
  }
}

export default Cart;
