import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQsNqvTH3H50pvDHIgoKOMM2YrlqZZ5s",
  authDomain: "damon-self.firebaseapp.com",
  databaseURL: "https://damon-self.firebaseio.com",
  projectId: "damon-self",
  storageBucket: "damon-self.appspot.com",
  messagingSenderId: "78305913859",
  appId: "1:78305913859:web:a7ee07bde4a231fadfb236",
  measurementId: "G-7MJY5QV7PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


App();