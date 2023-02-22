import { Text, View } from "react-native";
import React, { useState } from "react";
import { register } from "../store/client/auth.service";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { themeColor } from "../assets/CustomColors";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const onPress = () => {
    if(email === "" || password === "" || passwordAgain === "")
      alert("Please fill in all blank fields!")
    if(password !== passwordAgain)
      alert("The passwords you entered do not match!")
    else
      register(email, password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Email</Text>
      <CustomTextInput onChangeText={setEmail} value={email}/>
      <Text style={styles.titleText}>Password</Text>
      <CustomTextInput onChangeText={setPassword} value={password} secureTextEntry={true}/>
      <Text style={styles.titleText}>Password</Text>
      <CustomTextInput onChangeText={setPasswordAgain} value={passwordAgain} secureTextEntry={true}/>
      <CustomButton text="REGISTER" onPress={onPress}/>
    </View>
  );
};

const styles = {
  container: {
    flex:1,
    justifyContent: "center",
  },
  titleText:{
    marginLeft: "5%",
    color: themeColor,
    fontWeight: "bold"
  },
  registerText: {
    textAlign: "center",
    color: "#5e9b30",
    marginTop: 20
  }
}

export default Register;
