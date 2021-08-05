import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-Tx6hvbcPvcvD0_OYB7kiZKKBYLi7K0U",
  authDomain: "buyandsell-60.firebaseapp.com",
  projectId: "buyandsell-60",
  storageBucket: "buyandsell-60.appspot.com",
  messagingSenderId: "234054749293",
  appId: "1:234054749293:web:161bfbef9c2ff7fdabc364",
  measurementId: "G-GLBYXDMRHH",
};

const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.apps.length);
  }
};

export default initializeFirebase;
