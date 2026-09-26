// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixai-01.firebaseapp.com",
  projectId: "netflixai-01",
  storageBucket: "netflixai-01.firebasestorage.app",
  messagingSenderId: "398172480952",
  appId: "1:398172480952:web:4ab28dc7601a516e359b4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();