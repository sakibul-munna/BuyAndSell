import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              icon="email"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContecttype="emailAddress"
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              icon="lock"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContecttype="password"
            />
            <ErrorMessage error={errors.password} />
            <AppButton
              title="Login"
              onPress={() => {
                handleSubmit;
              }}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
  },
});

export default LoginScreen;