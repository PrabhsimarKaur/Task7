// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYpq7Z4xV-lmOOqYG71wY9FkA4vrVxlkU",
  authDomain: "task7-4f3f2.firebaseapp.com",
  projectId: "task7-4f3f2",
  storageBucket: "task7-4f3f2.firebasestorage.app",
  messagingSenderId: "553240393533",
  appId: "1:553240393533:web:1e03a3300b637261aab754",
  measurementId: "G-5Q18D4C9XS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
