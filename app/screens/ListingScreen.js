import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Button } from "react-native";

import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import colors from "../config/colors";
import getListings from "../api/listings";
import routes from "../navigations/routes";
import Screen from "../components/Screen";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    const response = await getListings();
    if (!response.ok) {
      return setError(true);
    } else {
      setError(false);
      setListings(response.data);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  useEffect;
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings!</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
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
