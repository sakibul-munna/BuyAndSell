import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
