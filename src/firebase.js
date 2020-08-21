import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhTJeMfBJ-nvPYzgEGdpK7uf_ZtsnSQJk",
  authDomain: "instagram-clone-57543.firebaseapp.com",
  databaseURL: "https://instagram-clone-57543.firebaseio.com",
  projectId: "instagram-clone-57543",
  storageBucket: "instagram-clone-57543.appspot.com",
  messagingSenderId: "205254882689",
  appId: "1:205254882689:web:b7b2724c5ef2e8550c6480",
  measurementId: "G-3W3SS83RZE",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
