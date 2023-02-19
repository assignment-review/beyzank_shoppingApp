import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductList from "../screens/ProductList";
import Profile from "../screens/Profile";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { themeColor } from "../assets/CustomColors";
import { useSelector } from "react-redux";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const Tabs = () => {

  const {quantity} = useSelector(state => state.cart)

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Cart') {
          iconName = focused
            ? 'basket'
            : 'basket';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person';
        }
        else
          iconName = focused ? 'home' : 'home';

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: themeColor,
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={ProductList} />
      <Tab.Screen name="Cart" component={Cart}  options={{ tabBarBadge: quantity > 0 ? quantity : null}} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
