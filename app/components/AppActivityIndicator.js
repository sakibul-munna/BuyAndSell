import React from "react";

import LottieView from "lottie-react-native";

function AppActivityIndicator({ visible = false }) {
  if (!visible) {
    return null;
  } else {
    return (
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    );
  }
}

export default AppActivityIndicator;
