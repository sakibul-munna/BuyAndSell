import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import Icon from "./Icon";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermissions();
  }, []);
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry Bro, we need camera roll permissions to make this work!");
    }
  };
  const handlePress = () => {
    if (!imageUri) {
      pickImage();
    } else {
      Alert.alert("Delete", "Brother ki sure?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        {
          text: "No",
        },
      ]);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            name="camera"
            backgroundColor={colors.light}
            iconColor={colors.medium}
            size={100}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
