// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqG7JHBn-NeRRM9H2v3AqF597d4uzPzi4",
  authDomain: "summer-camp-client-f5aea.firebaseapp.com",
  projectId: "summer-camp-client-f5aea",
  storageBucket: "summer-camp-client-f5aea.appspot.com",
  messagingSenderId: "499514338541",
  appId: "1:499514338541:web:db4ed7b5d5238fea7bf0e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;