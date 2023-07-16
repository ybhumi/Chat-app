// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBKy2WQNaKkMRrfh5ijtM9bpfTmQlH8a70",
  authDomain: "chat-application-bfc01.firebaseapp.com",
  projectId: "chat-application-bfc01",
  storageBucket: "chat-application-bfc01.appspot.com",
  messagingSenderId: "8091480197",
  appId: "1:8091480197:web:3311c5df1ef77009e939ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const  db = getFirestore();