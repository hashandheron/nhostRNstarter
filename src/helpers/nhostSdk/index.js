// import nhost from 'nhost-js-sdk';
import { createClient } from 'nhost-js-sdk';
import AsyncStorage from "@react-native-community/async-storage";
import { BACKEND_ENDPOINT } from '../api';

const nhostClient = createClient({
  baseURL: BACKEND_ENDPOINT,
  clientStorage: AsyncStorage,
  clientStorageType: "react-native"
});

// nhost.initializeApp(config);

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export {
  auth,
  storage
};