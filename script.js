// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp3MnR7JoaqJYeV-wIvya-lm5dsk_AUUU",
  authDomain: "pengumumanbemsinergi.firebaseapp.com",
  projectId: "pengumumanbemsinergi",
  storageBucket: "pengumumanbemsinergi.firebasestorage.app",
  messagingSenderId: "964275161508",
  appId: "1:964275161508:web:25cb59e51fca2ddf221931",
  measurementId: "G-0G21S8YRQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
