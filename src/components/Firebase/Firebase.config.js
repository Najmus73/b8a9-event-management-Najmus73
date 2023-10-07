// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgmOiTSjBDD8iI0VpDnWMPs9d-ynVu2GI",
  authDomain: "emailpasswordauth-eventservice.firebaseapp.com",
  projectId: "emailpasswordauth-eventservice",
  storageBucket: "emailpasswordauth-eventservice.appspot.com",
  messagingSenderId: "936404860274",
  appId: "1:936404860274:web:e5b2045434b74cebd331eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;