// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoOv1V1-4GpqrkZOzI--5FvwAQfFDRHOs",
  authDomain: "clone-ce08a.firebaseapp.com",
  projectId: "clone-ce08a",
  storageBucket: "clone-ce08a.appspot.com",
  messagingSenderId: "757510258691",
  appId: "1:757510258691:web:4383500a55074fe2fb0e36",
  measurementId: "G-46QCKKQRNC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
