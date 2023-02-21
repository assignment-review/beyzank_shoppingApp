import firestore from '@react-native-firebase/firestore';

export const addNewComment =  (comment, id, user) => {
  firestore()
    .collection('Comments')
    .add({
      comment: comment,
      itemId: id,
      userId: user.providerData[0].uid
    })
}
