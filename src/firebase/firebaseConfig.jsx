import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjGNzwUlr8lFd97NUV6QD1oN0TlPf1T3k",
  authDomain: "ecommerce-e9787.firebaseapp.com",
  projectId: "ecommerce-e9787",
  storageBucket: "ecommerce-e9787.appspot.com",
  messagingSenderId: "492613754484",
  appId: "1:492613754484:web:0868fa6edb3bd82fc5fb21",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
