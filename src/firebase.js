// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE3efE6fZOhEIs5Q1e0DjQKba_JpuG7IM",
  authDomain: "wheat-14b3f.firebaseapp.com",
  databaseURL: "https://wheat-14b3f-default-rtdb.firebaseio.com",
  projectId: "wheat-14b3f",
  storageBucket: "wheat-14b3f.appspot.com",
  messagingSenderId: "70669100175",
  appId: "1:70669100175:web:c7e9c078dada58f2b4bcfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;