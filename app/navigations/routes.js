import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import navigationTheme from "./navigationTheme";
import { navigationRef } from "./rootNavigation";

import OfflineNotice from "../components/OfflineNotice";

import firebase from "firebase/app";
import "firebase/auth";
import initializeFirebase from "../firebase/firebaseConfig";

import { AuthContext } from "../auth/AuthProvider";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializng, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializng) setInitializing(false);
  };

  useEffect(() => {
    initializeFirebase();
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializng) {
    return <AppActivityIndicator visible={initializng} />;
  }
  return (
    <>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Routes;
