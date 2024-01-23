// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv2UbxhG4dYoTPzouKMsRkGYNahMbKS-4",
  authDomain: "csc-data-2e0ae.firebaseapp.com",
  projectId: "csc-data-2e0ae",
  storageBucket: "csc-data-2e0ae.appspot.com",
  messagingSenderId: "213640441545",
  appId: "1:213640441545:web:22722bbc2d29895fa22718",
  measurementId: "G-0D9Y43VQR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);