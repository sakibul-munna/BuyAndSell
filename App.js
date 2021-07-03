import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AppNavigator from "./app/navigations/AppNavigator";
import AuthNavigator from "./app/navigations/AuthNavigator";
import navigationTheme from "./app/navigations/navigationTheme";

import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";
import jwtDecode from "jwt-decode";

import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await storage.getToken();
    if (!token) {
      return;
    } else {
      setUser(jwtDecode(token));
    }
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
