import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEDYgpZ-CIVAMkPQjbkgkSkclliwqaGzM",
  authDomain: "catch-up-fd42f.firebaseapp.com",
  projectId: "catch-up-fd42f",
  storageBucket: "catch-up-fd42f.appspot.com",
  messagingSenderId: "568713290512",
  appId: "1:568713290512:web:fbc24b105ac7b09f827b95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
