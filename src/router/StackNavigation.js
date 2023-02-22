import ProductDetail from "../screens/productDetail/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
      <Stack.Navigator >
        <Stack.Screen name="ProductList" component={Tabs} options={{headerTitle: "Shopping App"}}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerTitle: "Shopping App"}}/>
      </Stack.Navigator>
  );
};

export default StackNavigation;
