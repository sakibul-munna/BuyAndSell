import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Sakibul Islam Munna Sakibul Islam Munna Namia Karim Mrittika",
    description:
      "Vai, taka ta khub dorkar vai. Please vai diye den. Taka r jala boro jala vai. Eta ektu bojhar cheshta koren vai :)",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Emdadul Haque",
    description: "Dhur Hala! jah vag... mara kha aaaa        ",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg) => {
    setMessages(messages.filter((m) => m.id !== msg.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setMessages([
                {
                  id: 2,
                  title: "T2",
                  description: "D2",
                  image: require("../assets/mosh.jpg"),
                },
              ]);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessagesScreen;
