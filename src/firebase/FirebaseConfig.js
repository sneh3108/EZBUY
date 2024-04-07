
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC44cGEygY_hT49t9eDkH-jco5hm1Z_U94",
  authDomain: "ezbuy-e657b.firebaseapp.com",
  projectId: "ezbuy-e657b",
  storageBucket: "ezbuy-e657b.appspot.com",
  messagingSenderId: "75773938007",
  appId: "1:75773938007:web:1c0c3e2325e1ee616b9612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;