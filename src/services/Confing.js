// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // اگر از Firestore استفاده می‌کنید

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXHiIe9cbWWnAZuqhOLF_Al6NOVcN5Ojo",
  authDomain: "todos-f8520.firebaseapp.com",
  projectId: "todos-f8520",
  storageBucket: "todos-f8520.firebasestorage.app",
  messagingSenderId: "1024148212924",
  appId: "1:1024148212924:web:b2afcca7d90881d93fd4b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // برای Firestore

export { app, db }; // خروجی دادن app و db
