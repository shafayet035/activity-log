import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzD_gEOnU5K9lp1fwCpJG-3ZPlVpJzNmM",
  authDomain: "activity-log-ccea2.firebaseapp.com",
  projectId: "activity-log-ccea2",
  storageBucket: "activity-log-ccea2.appspot.com",
  messagingSenderId: "2461236272",
  appId: "1:2461236272:web:09abc554245d064154c1f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
