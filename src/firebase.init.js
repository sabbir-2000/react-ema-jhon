// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsBdo3Himtw4MCkWezs4CPhJB-_g6KB3w",
    authDomain: "ema-jon-project-95585.firebaseapp.com",
    projectId: "ema-jon-project-95585",
    storageBucket: "ema-jon-project-95585.appspot.com",
    messagingSenderId: "674807436765",
    appId: "1:674807436765:web:ff8268c82219a219539234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;