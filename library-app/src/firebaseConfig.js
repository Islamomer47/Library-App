// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHnQvVjDJrpn13d-mi63h6k0cinXURWR0",
  authDomain: "books-88c23.firebaseapp.com",
  projectId: "books-88c23",
  storageBucket: "books-88c23.appspot.com",
  messagingSenderId: "272073612479",
  appId: "1:272073612479:web:1d964f318fb4689dc23a0a",
  measurementId: "G-EZV0H84CM9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
