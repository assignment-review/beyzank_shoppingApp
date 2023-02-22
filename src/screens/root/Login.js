import { Text, TouchableOpacity, View } from "react-native";
import { login } from "../../store/client/auth.service";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { themeColor } from "../../assets/CustomColors";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    props.navigation.navigate("Register")
  }

  const onPressLogin = () => {
    if(email === "" || password === "")
      alert("Please fill in all blank fields!");
    else
      login(email, password)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Email</Text>
      <CustomTextInput onChangeText={setEmail} value={email}/>
      <Text style={styles.titleText}>Password</Text>
      <CustomTextInput onChangeText={setPassword} value={password} secureTextEntry={true}/>
      <CustomButton text="LOGIN" onPress={onPressLogin}/>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.registerText}>Don't you have an account? Register now!</Text>
      </TouchableOpacity>
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
export default Login;
