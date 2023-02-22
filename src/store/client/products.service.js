import firestore from "@react-native-firebase/firestore";

export const getAllProducts = () => {
  const result = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    return result;
}

export const saveMyOrder = (data, user) => {
  firestore()
    .collection('Orders')
    .add({
      products: data,
      userId: user.providerData[0].uid
    })
}
const productService = {
  getAllProducts,
  saveMyOrder
}

export default productService
