import React, { useState, useEffect } from 'react';
import { Text } from "react-native";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import RootNavigation from "./RootNavigation";

function AuthProvider() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <Text>Loading</Text>;

  if (!user) {
    return (
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    );
  }

  return (
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
  );
}
export default AuthProvider
