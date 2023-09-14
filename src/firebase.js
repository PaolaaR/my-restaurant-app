// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT_ibTBbx775u1bHWPRrjDJyaWxj1Rajw",
    authDomain: "my-restaurant-app-69e1f.firebaseapp.com",
    projectId: "my-restaurant-app-69e1f",
    storageBucket: "my-restaurant-app-69e1f.appspot.com",
    messagingSenderId: "1066106842973",
    appId: "1:1066106842973:web:de58c6ae8e6af30009c2b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);