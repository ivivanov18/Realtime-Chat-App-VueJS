import firebase from "firebase";
import firestore from "firebase/firestore";

require("dotenv").config();

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
