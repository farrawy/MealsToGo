import { Platform } from "react-native";

const liveHost = "https://us-central1-foodecity-dd5b5.cloudfunctions.net/";
const localHost = "http://localhost:5001/foodecity-dd5b5/us-central1";

const live_host = liveHost;
const local_host = localHost;

const isAndroid = Platform.OS === "android";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
