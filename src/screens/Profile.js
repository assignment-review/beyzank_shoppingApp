import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { logout } from "../store/client/auth.service";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { themeColor } from "../assets/CustomColors";

const Profile = () => {
  const {user} = useSelector(state => state.auth);
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const subscriber = firestore()
      .collection('Orders')
      .where('userId', '==', user.providerData[0].uid)
      .get()
      .then(querySnapshot => {
        const order = [];

        querySnapshot.forEach(documentSnapshot => {
          order.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setOrders(order);
        setLoading(false);
      });

    return () => subscriber;
  }, [orders]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      {orders && <Text style={styles.pageTitle}>Shopping History</Text>}
      {orders?.map(item => (
        <View style={styles.orderContainer}>
          {item.products.map(val => (
           <View style={styles.itemContainer}>
             <Image
               resizeMode="contain"
               style={styles.image}
               source={{
                 uri: val.item.image,
               }}
             />
             <View style={styles.titleContainer}>
               <Text style={styles.title}>{val.item.title}</Text>
               <View style={styles.subContainer}>
                 <View style={styles.priceContainer}>
                   <Text style={styles.price}>{val.item.price} TL</Text>
                   <Text style={styles.price}>x {val.quantity}</Text>
                 </View>
               </View>
             </View>
           </View>
          ))}
        </View>
      ))}
      <CustomButton text="LOGOUT" onPress={() => logout()}/>
    </ScrollView>
  );
};
const styles = {
  container: {
    flex:1,
    backgroundColor: "#fff"
  },
  pageTitle: {
    marginLeft: "5%",
    color: themeColor,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold"
  },
  orderContainer: {
    borderWidth: .3,
    borderRadius: 6,
    borderColor: "#7a7a7a",
    marginVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
  itemContainer: {
    flexDirection:"row",
    marginHorizontal:10,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:10
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginVertical: 30,
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
  priceContainer: {
    flexDirection: "row",
    flex:1,
    justifyContent: "space-between"
  },
  price:{
    color: themeColor,
  },
}

export default Profile;
