import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import AddComment from "./AddComment";
import firestore from "@react-native-firebase/firestore";
import { themeColor } from "../assets/CustomColors";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Comments')
      .where('itemId', '==', props.data.id)
      .get()
      .then(querySnapshot => {
        const comment = [];

        querySnapshot.forEach(documentSnapshot => {
          comment.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setComments(comment);
        setLoading(false);
      });

    return () => subscriber;
  }, [comments]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Text style={styles.title}>COMMENTS</Text>
      {
        comments.map(item => {
          return <View style={styles.commentContainer}>
            <Text>{item.comment}</Text>
            <Text style={styles.email}>{item.userId}</Text>
          </View>
        })
      }
      <AddComment itemId={props.data.id}/>
    </>
  );
}

const styles = {
  commentContainer:{
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.6,
    borderColor: "#626262",
    marginVertical:10
  },
  title:{
    marginLeft: "5%",
    color: themeColor
  },
  email: {
    color: "#3f3f3f",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right"
  }
}

export default Comments;
