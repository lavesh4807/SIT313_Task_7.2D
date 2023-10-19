


// Import Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, doc } from "firebase/firestore";
import { getDocs } from 'firebase/firestore';
// import { getDatabase, ref,push,set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAhUTzLzRaGV0b7KMgGRTD-CYokkgQwC00",
  authDomain: "task-ccfd4.firebaseapp.com",
  projectId: "task-ccfd4",
  storageBucket: "task-ccfd4.appspot.com",
  messagingSenderId: "767213021085",
  appId: "1:767213021085:web:db11d51a1ae2f012cf7174",
  measurementId: "G-E6XLW6MPPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export{storage, db, doc, getDocs}

