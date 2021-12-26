import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxuL716QErrDtTGwa1rXL4ew1Z7NF_cqQ",
  authDomain: "moe-project-3d801.firebaseapp.com",
  projectId: "moe-project-3d801",
  storageBucket: "moe-project-3d801.appspot.com",
  messagingSenderId: "466469059379",
  appId: "1:466469059379:web:45bd544bbbe33450d81c46",
  measurementId: "G-0LDF84JV30",
};

const fire = firebase.initializeApp(firebaseConfig);
export const googleAcc = getAuth(fire);

export default fire;
