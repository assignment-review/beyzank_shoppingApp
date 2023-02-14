import ProductList from "../screens/ProductList";
import ProductDetail from "../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
