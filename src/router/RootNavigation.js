import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/root/Register";
import Login from "../screens/root/Login";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
