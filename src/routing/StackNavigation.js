import ProductDetail from "../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={Tabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
