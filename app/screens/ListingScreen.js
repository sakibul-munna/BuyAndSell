import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import getListings from "../api/listings";
import routes from "../navigations/routes";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await getListings();
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  useEffect;
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={"$" + item.price}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
