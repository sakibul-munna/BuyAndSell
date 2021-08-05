import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppActivityIndicator from "../components/AppActivityIndicator";
import { AuthContext } from "../auth/AuthProvider";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const registerApi = useApi(usersApi.register);
  const [error, setError] = useState(false);

  const { register } = useContext(AuthContext);

  const handleSubmit = async (userInfo) => {
    try {
      await register(userInfo);
    } catch (error) {
      setError("An unexpected error occurred in registration");
      console.log(error);
      return;
    }
    navigation.navigate("Login");
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContecttype="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContecttype="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
