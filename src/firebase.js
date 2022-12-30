// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnYq6QISOgPDpILUvvgjyfoO6ocSDQw_0",
  authDomain: "foodie-inc-63d24.firebaseapp.com",
  projectId: "foodie-inc-63d24",
  storageBucket: "foodie-inc-63d24.appspot.com",
  messagingSenderId: "986115684525",
  appId: "1:986115684525:web:4b1d6bbfd31ceb98cf2e24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
