import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCB_OfgRuQ-RRZKcObfKH3UVzncjxgWunA",
    authDomain: "linkedin-clone-b213a.firebaseapp.com",
    projectId: "linkedin-clone-b213a",
    storageBucket: "linkedin-clone-b213a.appspot.com",
    messagingSenderId: "46161255328",
    appId: "1:46161255328:web:ca051f59d1cbe2bae3e2c5"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

export { db, auth };