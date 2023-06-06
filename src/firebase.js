// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByGORuMmjAdIItcim6t3yWSPQJ_1UyEyE",
  authDomain: "realtor-clone-react-df526.firebaseapp.com",
  projectId: "realtor-clone-react-df526",
  storageBucket: "realtor-clone-react-df526.appspot.com",
  messagingSenderId: "285977000603",
  appId: "1:285977000603:web:4f90560b8771d2faa0243e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();