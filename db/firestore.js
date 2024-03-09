import * as firebase from "firebase";
import "dotenv/config";
// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: "G-GPM7LWRNBM",
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
