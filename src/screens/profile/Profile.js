import { ActivityIndicator, ScrollView, Text } from "react-native";
import CustomButton from "../../components/CustomButton";
import { logout } from "../../store/client/auth.service";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { themeColor } from "../../assets/CustomColors";
import OrderItem from "./components/OrderItem";

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
      {orders?.map(item => <OrderItem item={item} />)}
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
  }
}

export default Profile;
