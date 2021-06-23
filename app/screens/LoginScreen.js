import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
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
            <AppButton title="Login" onPress={() => handleSubmit} />
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
