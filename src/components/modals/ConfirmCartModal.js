import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { themeColor } from "../../assets/CustomColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { confirmCart } from "../../store/slices/cartSlice";

const ConfirmCartModal = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goHome = () => {
    props.setModalVisible(false)
    dispatch(confirmCart())
    navigation.navigate("Home")
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons name="checkmark-circle" color="green" size={60}/>
            <Text style={styles.modalText}>
              Your cart has been approved.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={goHome}>
              <Text style={styles.textStyle}>Back to Home Page
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: themeColor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 30,
    textAlign: 'center',
  },
  confirmButton:{
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
});

export default ConfirmCartModal;
