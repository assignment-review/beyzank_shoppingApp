import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { addNewComment } from "../../../store/client/comments.service";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import CustomButton from "../../../components/CustomButton";

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const { user } = useSelector(state => state.auth)
  const toast = useToast();

  const add = () => {
    if(comment.length >0 ){
      addNewComment(comment,props.itemId, user)
      setComment("");
      toast.show("Your comment has been received.", {
        type:"success",
        placement: "center",
        duration:1200
      })
    }
    else
      alert("Please enter a comment!");
  }
  return (
    <View>
      <TextInput style={styles.input} value={comment} onChangeText={setComment} placeholder={"Add Your Comment"} textAlignVertical="top"/>
      <View style={styles.button}>
        <CustomButton text={"Submit"} onPress={add}/>
      </View>
    </View>

  );
};

const styles = {
  input: {
    width: "90%",
    height: 100,
    borderWidth: 0.6,
    borderRadius: 6,
    alignSelf: "center",
    borderColor: "#626262",
    marginBottom: 20,
    marginTop: 30,
    padding: 10,
  },
  button: {
    marginBottom: 100
  }
}

export default AddComment;
