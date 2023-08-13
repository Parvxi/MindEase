// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVZgqMeblxRN_YA0bv8AK-DQYU7nwW-Wo",
  authDomain: "reactnative-auth-88068.firebaseapp.com",
  projectId: "reactnative-auth-88068",
  storageBucket: "reactnative-auth-88068.appspot.com",
  messagingSenderId: "700001574607",
  appId: "1:700001574607:web:7aeaaf86314331643261ba"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
