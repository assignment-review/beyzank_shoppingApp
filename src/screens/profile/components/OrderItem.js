import { Image, Text, View } from "react-native";
import React from "react";
import { themeColor } from "../../../assets/CustomColors";

const OrderItem = (props) => {

  const {item} = props;

  return (
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

  );
};

const styles = {

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
  }
}

export default OrderItem;
