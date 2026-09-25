// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1c6N2eH-y7Ydhz1CcoqxCRdq4aTI_i0c",
  authDomain: "netflixgpt-14f88.firebaseapp.com",
  projectId: "netflixgpt-14f88",
  storageBucket: "netflixgpt-14f88.firebasestorage.app",
  messagingSenderId: "424290149472",
  appId: "1:424290149472:web:680dc9f032931383890f05",
  measurementId: "G-2LBMV3VPJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();