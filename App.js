import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppPicker from "./app/components/AppPicker";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import ListingScreen from "./app/screens/ListingScreen";
import AccountScreen from "./app/screens/AccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ImageInput from "./app/components/ImageInput";

import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./app/components/ImageInputList";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigations/AuthNavigator";
import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
