import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDX0S41RYwOWBSlMD12f6b6LAWpUdl-3lM",
    authDomain: "fir-m-gram.firebaseapp.com",
    projectId: "fir-m-gram",
    storageBucket: "fir-m-gram.appspot.com",
    messagingSenderId: "13173300788",
    appId: "1:13173300788:web:f412a0bb9e673027a7f461",
  })
  .auth();
