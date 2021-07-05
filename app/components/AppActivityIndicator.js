import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function AppActivityIndicator({ visible = false }) {
  if (!visible) {
    return null;
  } else {
    return (
      <View style={styles.overlay}>
        <LottieView
          source={require("../assets/animations/loader.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default AppActivityIndicator;
