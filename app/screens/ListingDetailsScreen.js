import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>(listing.title)</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh"
        subtitle="5 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
