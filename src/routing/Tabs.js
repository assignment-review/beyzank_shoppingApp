import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductList from "../screens/ProductList";
import Basket from "../screens/Basket";
import Profile from "../screens/Profile";
import FontAwesome5 from 'react-native-vector-icons/Ionicons';
import { themeColor } from "../assets/CustomColors";

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Basket') {
          iconName = focused
            ? 'basket'
            : 'basket';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person';
        }
        else
          iconName = focused ? 'home' : 'home';

        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: themeColor,
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="ProductList" component={ProductList} />
      <Tab.Screen name="Basket" component={Basket} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
