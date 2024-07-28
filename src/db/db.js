import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAFyMP3UtLuciySZKcUARBERxa54FJRYs",
  authDomain: "ecommerce-ipunto.firebaseapp.com",
  projectId: "ecommerce-ipunto",
  storageBucket: "ecommerce-ipunto.appspot.com",
  messagingSenderId: "588645870602",
  appId: "1:588645870602:web:fae73fdfaa64bdf1b783f3",
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;