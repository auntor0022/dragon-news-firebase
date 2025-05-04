// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3d_oAmLoqdRB0kaf43tRGmCiHQpQ36vk",
  authDomain: "the-dragon-news-b2255.firebaseapp.com",
  projectId: "the-dragon-news-b2255",
  storageBucket: "the-dragon-news-b2255.firebasestorage.app",
  messagingSenderId: "433644890440",
  appId: "1:433644890440:web:9c48084e74b3aa856eeb7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);