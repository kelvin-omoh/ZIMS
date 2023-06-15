// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6Tqs5hi0QBqlPo0mY5MHYkAIdw6O3ng",
  authDomain: "fir-auth-fp.firebaseapp.com",
  projectId: "fir-auth-fp",
  storageBucket: "fir-auth-fp.appspot.com",
  messagingSenderId: "370175664067",
  appId: "1:370175664067:web:fc803e9bd744194e49a776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;