/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import StackNavigation from "./src/routing/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {

  return (
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
  );
}


export default App;
