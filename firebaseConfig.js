// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3Wd1WKTpqaLTvOPMPp6PXEpCANrH0s0",
  authDomain: "csc-data-62838.firebaseapp.com",
  projectId: "csc-data-62838",
  storageBucket: "csc-data-62838.appspot.com",
  messagingSenderId: "647985516757",
  appId: "1:647985516757:web:dd80d4b6f20269cff8d25c",
  measurementId: "G-F75FMR07KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);