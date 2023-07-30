// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqDE01OmxFnmEWiQ07ReEXXwujknV1MAA",
    authDomain: "instagram-clone-12ef9.firebaseapp.com",
    projectId: "instagram-clone-12ef9",
    storageBucket: "instagram-clone-12ef9.appspot.com",
    messagingSenderId: "591007272908",
    appId: "1:591007272908:web:afe9c20294daeeb686d769"
  };

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

export {
    app,
    db,
    auth,
    storage
}