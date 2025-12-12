import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0A7yFBVbky7rzomtG4ICMKldhxqBJYnc",
  authDomain: "club-clothing-6cafd.firebaseapp.com",
  projectId: "club-clothing-6cafd",
  storageBucket: "club-clothing-6cafd.firebasestorage.app",
  messagingSenderId: "787474028528",
  appId: "1:787474028528:web:ac0ad0f14980d24d776f35",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
