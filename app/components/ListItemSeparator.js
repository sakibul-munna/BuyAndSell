import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { View } from "react-native";

function ListItemSeparator(props) {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
