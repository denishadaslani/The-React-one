
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBug8o0mM6TD5uZXTBi82nI6OpGnXpagXw",
  authDomain: "magamart-789b8.firebaseapp.com",
  projectId: "magamart-789b8",
  storageBucket: "magamart-789b8.firebasestorage.app",
  messagingSenderId: "390568107501",
  appId: "1:390568107501:web:905b1b309e672f72c2dbe4",
  measurementId: "G-VPV5ZQLYVV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

