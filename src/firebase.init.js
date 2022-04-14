// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCJu0hDMfhNLdk-HAVh-YeqqTrOPBd_X84",
   authDomain: "genius-car-service-b640c.firebaseapp.com",
   projectId: "genius-car-service-b640c",
   storageBucket: "genius-car-service-b640c.appspot.com",
   messagingSenderId: "142870356654",
   appId: "1:142870356654:web:d6007fb524007a81b0033f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;