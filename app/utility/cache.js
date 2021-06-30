import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, "minutes") > 5;

  return isExpired;
};

const get = async (key) => {
  try {
    const value = AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (!item) {
      return null;
    }
    if (isExpired(item)) {
      AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
