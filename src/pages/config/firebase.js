
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBSY54LbZCQ21asBdqclPcK6u83T5lbJeA",
  authDomain: "tok---pj.firebaseapp.com",
  projectId: "tok---pj",
  storageBucket: "tok---pj.appspot.com",
  messagingSenderId: "486831938551",
  appId: "1:486831938551:web:0edc36e5e778a41fe7acf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;