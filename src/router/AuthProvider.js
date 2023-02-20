import React, { useState, useEffect } from 'react';
import { Text } from "react-native";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import RootNavigation from "./RootNavigation";
import { ToastProvider } from 'react-native-toast-notifications'
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../store/slices/authSlice";

function AuthProvider() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(saveUserInfo(user))
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
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
        <ToastProvider>
          <StackNavigation/>
        </ToastProvider>
      </NavigationContainer>
  );
}
export default AuthProvider
