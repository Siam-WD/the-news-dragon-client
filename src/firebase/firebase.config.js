// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzDhA9RUorKCyXhAfePTL_APehbqtVu1M",
  authDomain: "the-news-dragon-ef4db.firebaseapp.com",
  projectId: "the-news-dragon-ef4db",
  storageBucket: "the-news-dragon-ef4db.appspot.com",
  messagingSenderId: "441838175162",
  appId: "1:441838175162:web:f3ac5338f9de8769509383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;