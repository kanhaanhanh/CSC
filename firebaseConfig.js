// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXJvTchsULZNOM91vfCc4_C1eCJ3flac",
  authDomain: "csc-company-163e0.firebaseapp.com",
  projectId: "csc-company-163e0",
  storageBucket: "csc-company-163e0.appspot.com",
  messagingSenderId: "930507627011",
  appId: "1:930507627011:web:719327266005d607408c36",
  measurementId: "G-VLB9XXEH1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);