import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7hpMfYJUuZ_R--E_3VZON3WYpEKVYoC0",
  authDomain: "exchangrio-63b67.firebaseapp.com",
  projectId: "exchangrio-63b67",
  storageBucket: "exchangrio-63b67.appspot.com",
  messagingSenderId: "303407621724",
  appId: "1:303407621724:web:49016629396fa16711a899",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

export default db;
