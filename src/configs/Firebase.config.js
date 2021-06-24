import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDb5PRl5124KvHkjMx-wbaYunaCh9pReMk",
  authDomain: "retro-tech-talks.firebaseapp.com",
  projectId: "retro-tech-talks",
  storageBucket: "retro-tech-talks.appspot.com",
  messagingSenderId: "1051118628627",
  appId: "1:1051118628627:web:3226904dd2d67dd35774e6",
});

export const auth = app.auth();
export default app;
