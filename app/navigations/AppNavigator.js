import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={ListingsScreen} />
      <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
