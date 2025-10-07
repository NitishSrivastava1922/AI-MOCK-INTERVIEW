// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtGphOHu13lNWYXTnINjoiHcr4SvaUF2w",
  authDomain: "prepwise-58355.firebaseapp.com",
  projectId: "prepwise-58355",
  storageBucket: "prepwise-58355.firebasestorage.app",
  messagingSenderId: "986764295431",
  appId: "1:986764295431:web:c14bd6ef4516d2395159a2",
  measurementId: "G-SJFY05XKV0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);