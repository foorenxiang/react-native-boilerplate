/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isSerializable } from './UtilityFunctions';

export const persistClear = async () => {
  await AsyncStorage.clear();
  console.log('Clearing persist storage');
};

export const persistStore = async (storageKey, value) => {
  try {
    if (isSerializable(value)) {
      await AsyncStorage.setItem(storageKey, JSON.stringify(value));
      console.log(`Storing into ${storageKey} value ${value}`);
    } else {
      const errorMessage = `Value for ${storageKey}is not serializable, failed to set in async storage! Object type is ${typeof value}`;
      throw errorMessage;
    }
  } catch (err) {
    console.log(err);
  }
};

export const persistLoad = async (storageKey) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    console.log(`Loaded from ${storageKey} value ${value}`);
    return value !== null ? JSON.parse(value) : null;
  } catch (err) {
    console.log(err);
  }
};

export const loadStateFromStore = async (storageKey, setStateMethod) => {
  const value = await persistLoad(storageKey);
  if (value) {
    console.log(`Setting ${storageKey} to app context with value ${JSON.stringify(value)}`);
    setStateMethod(value);
  } else {
    console.log(`Not setting ${storageKey} to app context`);
  }
};

export const setStateAndStore = (storageKey, value, setStateMethod) => {
  setStateMethod(value);
  persistStore(storageKey, value);
};
