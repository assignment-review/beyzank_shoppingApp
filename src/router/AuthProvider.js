import React, { useState, useEffect } from 'react';
import { Text } from "react-native";
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import RootNavigation from "./RootNavigation";
import { ToastProvider } from 'react-native-toast-notifications'
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../store/slices/authSlice";
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import notifee, { AndroidImportance } from "@notifee/react-native";

function AuthProvider() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = (notification) => {
    const isClicked = notification.userInteraction === 1;

    if (isClicked) {
    } else {
    }
    const result = PushNotificationIOS.FetchResult.NoData;
    notification.finish(result);
  };

  const onAuthStateChanged = (user) => {
    dispatch(saveUserInfo(user))
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() =>{
    checkPermission();

    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        onDisplayNotification(notification)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
        },
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.popInitialNotification((notification) => {
      console.log('Initial Notification', notification);
    });
  })

  const checkPermission = async () => {
    console.log("Check permission function call");
    const enabled = await messaging().hasPermission();
    if(enabled)
      getToken();
    else
      requestPermission();
  }

  const getToken = async () => {
    let fcmToken;
    if(!fcmToken)
      fcmToken = await messaging().getToken();
    if(fcmToken)
      console.log("fcmToken = " + fcmToken);
  }

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      getToken();
    }catch (e) {
      console.log(e);
    }
  }

  const onDisplayNotification = async (notification) => {
    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH
    });

    await notifee.displayNotification({
      title: notification.title,
      body: notification.message,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: 'default',
        },
      },
    });
  }

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
