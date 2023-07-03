// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB2GsHV5q0Wp3efLRKnac5dBIx_hBhj2Jo",
  authDomain: "fir-crud-6b11d.firebaseapp.com",
  projectId: "fir-crud-6b11d",
  storageBucket: "fir-crud-6b11d.appspot.com",
  messagingSenderId: "706822256393",
  appId: "1:706822256393:web:ede22d57bed63225ca85d8",
  measurementId: "G-0SJ228RJ79"
};

// Initialize Firebase & Auth
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {auth, googleProvider};
